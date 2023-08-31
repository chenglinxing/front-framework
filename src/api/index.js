import axios from 'axios';

const apiClient = axios.create({
    // 配置接口请求的基本 URL
    baseURL: 'http://api.example.com',
});

export default apiClient;
