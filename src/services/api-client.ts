import axios, { AxiosRequestConfig } from "axios";

export interface Fetch<T> {
    count : number;
    next : string | null;
    results : T[]
}

const axiosInstance = axios.create({
    baseURL : "https://api.rawg.io/api",
    params: {
        key :'ec442188c3824a738781459dc447d562'
    }
})

class APIClient<T> {
    endpoint : string;

    constructor (endpoint : string) {
        this.endpoint = endpoint;
    }

    getAll = (config:AxiosRequestConfig) => {
        return axiosInstance.get<Fetch<T>>(this.endpoint,config).then(res=>res.data)
    }
}

export default APIClient;