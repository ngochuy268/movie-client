import axios from 'axios';

export const fetchStars = async (filmName) => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/film/${filmName}/stars`);
    return response.data;
};

export const fetchWriters = async (filmName) => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/film/${filmName}/writter`);
    return response.data;
};

export const fetchDirectors = async (filmName) => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/film/${filmName}/director`);
    return response.data;
};