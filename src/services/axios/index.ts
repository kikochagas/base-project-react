import axios, { AxiosInstance, AxiosStatic } from "axios";

import InterceptorResponse from "./InterceptorResponse";
import InterceptorResponseError from "./InterceptorResponseError";
import IAttributes from "./IAttributes";

let URL_API = process.env.NEXT_PUBLIC_URL_API

const api = axios.create({
    method: 'get',
    baseURL: URL_API,
    timeout: 15000,
} as IAttributes);


// api.interceptors.response.use(
//     InterceptorResponse, 
//     InterceptorResponseError
// );

// api.interceptors.request.use();

export default api ;