import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

interface TokenPayload{
    exp: number,
    [key: string]: any

}

const serverURI = "http://localhost:2000";

const apiWithToken = axios.create({
  baseURL: serverURI,
  headers: { 'Content-Type': 'application/json' },
  responseType: 'text',
});

const apiWithoutToken = axios.create({
  baseURL: serverURI,
  headers: { 'Content-Type': 'application/json' },
  responseType: 'text',
});

export const checkExpiredToken = (token: string) => {
  if (token) {
    const { exp } = jwtDecode<TokenPayload>(token);
    const time = exp * 1000;
    const isExpired = time > Date.now();
    return !isExpired;
  }
  return true;
};

apiWithToken.interceptors.request.use(
    async (config) => {

    try{
    let token: string | null = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
  
    if (token && checkExpiredToken(token) && refreshToken) {
      // 🔄 Get new access token
      const res = await axios.post(`${serverURI}/api/User/Refresh`, {
        refreshToken,
      });
      token = res.data.accessToken;
      if(token){
        localStorage.setItem("accessToken", token);
      }
    }
  
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        config.headers['Content-Type'] = 'application/json';
    }
  
    return config;
    }catch(error){
        console.log(error);
        throw new Error("Axios interceptor");
    }
});

apiWithToken.interceptors.response.use(
  (response) => {
    if (response.headers['content-type'].includes('application/json')) {
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiWithoutToken.interceptors.request.use(
  (config) => {
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => {
    return Promise.reject(error + 'axios interceptor');
  }
);

apiWithoutToken.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { apiWithToken, apiWithoutToken };
