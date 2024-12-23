import { useEffect, useState } from 'react';
import { fetchStars, fetchWriters, fetchDirectors } from '../../models/Movies/movieSingle';

const useMoviesSingleController = (filmName) => {
    const [star, setStar] = useState([]);
    const [director, setDirector] = useState([]);
    const [writter, setWriter] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const starsData = await fetchStars(filmName);
                setStar(starsData);
            } catch (error) {
                console.error('Error fetching stars:', error);
            }
        };
        fetchData();
    }, [filmName]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const writersData = await fetchWriters(filmName);
                setWriter(writersData);
            } catch (error) {
                console.error('Error fetching writers:', error);
            }
        };
        fetchData();
    }, [filmName]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const directorsData = await fetchDirectors(filmName);
                setDirector(directorsData);
            } catch (error) {
                console.error('Error fetching directors:', error);
            }
        };
        fetchData();
    }, [filmName]);

    return {
        star,
        director,
        writter,
    };
};

export default useMoviesSingleController;