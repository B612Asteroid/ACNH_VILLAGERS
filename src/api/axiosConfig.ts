import { AxiosRequestConfig } from "axios";

const API_SERVER = 'https://acnhapi.com/v1/';

export const axiosRequestConfiguration: AxiosRequestConfig = {
    baseURL: API_SERVER,
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json',
    }
};