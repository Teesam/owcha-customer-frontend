import { apiWithToken, apiWithoutToken } from './axiosInterceptor';

interface LoginInfo{
    email: string,
    password: string
}

const request = {
  userLogin: (data: LoginInfo) => {
    console.log(data);
    return apiWithoutToken.post("/api/v1/auth/login", data);
  },
  createUser: (data: LoginInfo) => {
    console.log(data);
    return apiWithoutToken.post("/api/v1/auth/createUser", data);
  },
}

export default request;