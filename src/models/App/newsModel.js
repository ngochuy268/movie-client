import axios from 'axios';

export const fetchNews = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/news`);
    return response.data;
};
