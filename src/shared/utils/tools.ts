export const getDeviceToken = () =>
  typeof window !== 'undefined'
    ? localStorage.getItem('deviceToken')
    : undefined;
