import { History } from 'history';
import { Dispatch } from 'storeon';
import jwt from 'jsonwebtoken';
import { APIQueryHistoryEntry } from './Store';

type Header = 'PUT' | 'PATCH';

const createTokenizedHeader = (token: string, type?: Header) => {
  const headers = new Headers();
  headers.append('Authorization', `Bearer ${token}`);
  type && headers.append('X-Http-Method-Override', type);

  return headers;
};

interface PatchResponse {
  token: string;
}

type TokenizedFakePatchResponse = {
  hasExpiredToken: boolean;
  json: null | PatchResponse;
  error: null | string;
};

const tokenizedFakePatch = async (
  token: string,
  url: string,
  body: FormData,
) => {
  const data: TokenizedFakePatchResponse = {
    hasExpiredToken: false,
    json: null,
    error: null,
  };

  const headers = createTokenizedHeader(token, 'PATCH');

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body,
    });

    if (!response.ok && response.status === 401) {
      data.hasExpiredToken = true;
      return data;
    }

    data.json = await response.json();
    return data;
  } catch (e) {
    data.error = 'Something went wrong...';
    return data;
  }
};

const delayedLogout = (dispatch: Dispatch, history: History, timeout = 5) => {
  setTimeout(() => {
    dispatch('user/logout');
    history.push('/auth');
  }, timeout * 1000);
};

interface DecodedJWT {
  exp: number;
}

const isTokenExpired = (token: string) =>
  (jwt.decode(token) as DecodedJWT).exp * 1000 < Date.now();

const calcRemainingAnimationDuration = (
  start: number,
  end = Date.now(),
  max = 750,
) => {
  const diff = end - start;

  if (diff >= max) {
    return 1;
  }

  if (diff < max) {
    return max - diff;
  }
};

const getAPIQueryHistory = async (
  token: string,
  headers: null | Headers = null,
) => {
  try {
    const response = await fetch('/account/apiQueryHistory', {
      method: 'GET',
      headers: headers ? headers : createTokenizedHeader(token),
    });

    return (await response.json()) as APIQueryHistoryEntry[];
  } catch (e) {
    return [];
  }
};

export {
  isTokenExpired,
  createTokenizedHeader,
  tokenizedFakePatch,
  delayedLogout,
  calcRemainingAnimationDuration,
  getAPIQueryHistory,
};
