import { ACCESS_TOKEN_KEY } from './constant';

export const getAccessToken = () =>
  typeof window !== 'undefined'
    ? localStorage.getItem(ACCESS_TOKEN_KEY)
    : undefined;

export const setAccessToken = (token: string) => {
  localStorage.setItem(ACCESS_TOKEN_KEY, token);
};

export const clearAccessToken = () => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
};
