import axios from 'axios';

export const fetchFilms = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/film`);
    return response.data;
};
