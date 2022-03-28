import axios, { AxiosRequestConfig } from 'axios';
import { Params } from 'react-router';
import { isUndefined, isString } from 'lodash';
import { isValidKey } from '@/utils';

interface IRequest {
    <Params, Response>(config: IResponseConfig<Params>, options?: any): Promise<Response>;
    get: <Params, Response>(url: string, params: Params, options?: any) => Promise<Response>;
    post: <Params, Response>(url: string, params: Params, options?: any) => Promise<Response>;
}

interface IResponseConfig<Params> {
    method: string;
    url: string;
    params: Params;
}

const baseUrl = 'http://localhost:4000';
const fetchTimeOut = 5000;

// 单例模式
const service = axios.create({ baseURL: baseUrl, timeout: fetchTimeOut, withCredentials: true });

// 请求拦截
service.interceptors.request.use(config => {
    // 自定义header 添加token等
    // config.header.token = 'token'
    return config;
});

// 响应拦截
service.interceptors.response.use(response => {
    return response;
});

// 筛选请求状态
function checkStatus(res: any) {
    return res;
}

function parseJSON(res: any) {
    return res.data;
}

// 过滤空值 null undefined 空串
function formatParams<Params>(params: Params) {
    const formatParams: Partial<Params> = {};
    Object.entries(params).forEach(([key, value]) => {
        if (value === null || isUndefined(value)) {
            // 过滤null undefined
        } else if (isString(value)) {
            // 只过滤空串
            if (value !== '') {
                formatParams[key] = value;
            }
        } else {
            formatParams[key] = value;
        }
    });
    return formatParams;
}

function request<Params, Response>(config: IResponseConfig<Params>, options: any): Promise<Response> {
    const { method, url, params } = config;
    const formatParams = params;
    const data = method.toUpperCase() === 'GET' ? { params: formatParams } : { data: formatParams };

    return new Promise((resolve, reject) => {
        const config: AxiosRequestConfig = {
            method: method as AxiosRequestConfig['method'],
            url,
            ...data,
        };
        service({ ...config })
            .then(checkStatus)
            .then(parseJSON)
            .then(data => resolve(data))
            .catch(err => reject(err));
    });
}

request['get'] = (url: string, params: any, options: any) =>
    request<Params, Response>({ url, method: 'get', params }, options);

request['post'] = (url: string, params: any, options: any) =>
    request<Params, Response>({ url, method: 'post', params }, options);

export default request as IRequest;
