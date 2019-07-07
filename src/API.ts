import axios, { AxiosResponse } from 'axios';
import { IUserSettings, APIQueryHistoryEntry } from './Store';

interface AxiosDefaultParams {
  timeout: number;
  headers?: { Authorization: string };
}

const defaultParams: AxiosDefaultParams = {
  timeout: 1000 * 10,
};

const refreshAuthorization = (token: string) =>
  (axios.defaults.headers.common['Authorization'] = 'Bearer ' + token);

interface AuthenticationResponse {
  token?: string;
  error?: string;
}

interface AuthenticationPayload {
  mail: string;
  password: string;
}

const authenticate = async (
  data: AuthenticationPayload,
): Promise<AxiosResponse<AuthenticationResponse>> =>
  await axios.post('/auth/login', data, defaultParams);

const register = async (
  data: AuthenticationPayload,
): Promise<AxiosResponse<AuthenticationResponse>> =>
  await axios.post('/auth/register', data, defaultParams);

interface ProfileResponse {
  token: string;
  settings: IUserSettings;
  apiQueryHistory: APIQueryHistoryEntry[];
}

const getProfileResponse = async (
  url: string,
  token: string | undefined,
): Promise<AxiosResponse<ProfileResponse>> => {
  token && refreshAuthorization(token);

  return await axios.get(url, defaultParams);
};

const postProcessQuery5 = async (
  iteration: number,
  cycles: number,
  token: string,
): Promise<AxiosResponse> => {
  token && refreshAuthorization(token);

  return await axios.post(
    `/api/postProcessQuery5/${iteration}/${cycles}`,
    defaultParams,
  );
};

const createAPIClient = (apiKey: string, token: string) => {
  refreshAuthorization(token);

  return axios.create({
    baseURL: `/api/${apiKey}/`,
    timeout: defaultParams.timeout,
  });
};

export {
  authenticate,
  register,
  getProfileResponse,
  createAPIClient,
  postProcessQuery5,
};
