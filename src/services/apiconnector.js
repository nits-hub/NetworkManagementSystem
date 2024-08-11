import axios from "axios"

export const axiosInstance = axios.create({});

// export const apiConnector = (method, url, bodyData, headers, params) => {
//     return axiosInstance({
//         method:`${method}`,
//         url:`${url}`,
//         data: bodyData ? bodyData : null,
//         headers: headers ? headers: null,
//         params: params ? params : null,
//     });
// }

export const apiConnector = (method, url, bodyData, token, params) => {
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    return axiosInstance({
        method: method,
        url: url,
        data: bodyData ? bodyData : null,
        headers: headers,
        params: params ? params : null,
    });
};
