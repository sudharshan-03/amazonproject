import { axiosInstance } from "./api"


export const getApi = async (url) => {
    const response = await axiosInstance.get(url);
    return response.data;
}

export const postApi = async (url) => {
    const response = await axiosInstance.post(url);
    return response.data;
}

export const postDApi = async (url,data) => {
    const response = await axiosInstance.post(url,data);
    return response.data;
}