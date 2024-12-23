import { useState } from 'react';
import { filterFilms, getGenres } from '../../models/Movies/movieModel';

const useMoviesController = (films) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [filmsPerPage, setFilmsPerPage] = useState(3);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [selectedRating, setSelectedRating] = useState('');
    const [releaseYearFrom, setReleaseYearFrom] = useState('1980');
    const [releaseYearTo, setReleaseYearTo] = useState('2024');
    const [searchResults, setSearchResults] = useState([]);
    const [isSearched, setIsSearched] = useState(false);

    const genres = getGenres(films);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSearched(true);
        const results = filterFilms(films, searchTerm, selectedGenres, selectedRating, releaseYearFrom, releaseYearTo);
        setSearchResults(results);
    };

    const indexOfLastFilm = currentPage * filmsPerPage;
    const indexOfFirstFilm = indexOfLastFilm - filmsPerPage;
    const currentFilms = isSearched ? searchResults : films.slice(indexOfFirstFilm, indexOfLastFilm);

    const totalPages = Math.ceil(films.length / filmsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return {
        currentFilms,
        genres,
        handleSubmit,
        searchTerm,
        setSearchTerm,
        selectedGenres,
        setSelectedGenres,
        selectedRating,
        setSelectedRating,
        releaseYearFrom,
        setReleaseYearFrom,
        releaseYearTo,
        setReleaseYearTo,
        currentPage,
        totalPages,
        handleNextPage,
        handlePrevPage,
        isSearched,
        setIsSearched,
        setFilmsPerPage,
        setCurrentPage
    };
};

export default useMoviesController;