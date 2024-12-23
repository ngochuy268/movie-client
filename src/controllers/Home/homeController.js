import { useEffect, useState } from 'react';
import { groupFilmsByGenre } from '../../models/Home/filmModel';

const useHomeController = (films, news) => {
    const [groupedFilms, setGroupedFilms] = useState({});

   
    useEffect(() => {
        if (films.length > 0) {
            const genres = groupFilmsByGenre(films);
            setGroupedFilms(genres);
        }
    }, [films, news]);

    return {
        groupedFilms,
    };
};

export default useHomeController;