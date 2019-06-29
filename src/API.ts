import axios, { AxiosResponse } from 'axios';

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
): Promise<AuthenticationResponse> =>
  (await axios.post('/auth/login', data, defaultParams)).data;

const register = async (
  data: AuthenticationPayload,
): Promise<AuthenticationResponse> =>
  (await axios.post('/auth/register', data, defaultParams)).data;

const getProfileResponse = async (
  url: string,
  token: string | undefined,
): Promise<AxiosResponse> => {
  token && refreshAuthorization(token);

  return await axios.get(url, defaultParams);
};

const createAPIClient = (apiKey: string, token: string) => {
  refreshAuthorization(token);

  return axios.create({
    baseURL: `/api/${apiKey}/`,
    timeout: defaultParams.timeout,
  });
};

export { authenticate, register, getProfileResponse, createAPIClient };
