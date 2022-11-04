import jwt from 'jwt-decode';

export const getUser = (token: string | null) => {
  if (!token) {
    return;
  } else {
    const user = jwt(token);
    return user;
  }
}

export const getAccessToken = () => {
  return localStorage.getItem('access-token')
}

export const getRefreshToken = () => {
  return localStorage.getItem('refresh-token')
}

export const setAccessToken = (token: string) => {
  return localStorage.setItem('access-token', token)
}

export const setRefreshToken = (token: string) => {
  return localStorage.setItem('refresh-token', token)
}

export const clearAccessToken = () => {
  return localStorage.removeItem('access-token')
}

export const clearRefreshToken = () => {
  return localStorage.removeItem('refresh-token')
}
