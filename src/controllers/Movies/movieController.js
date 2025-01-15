import { useState } from 'react';
import { filterFilms, getGenres } from '../../models/Movies/movieModel';

const useMoviesController = (films) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [filmsPerPage, setFilmsPerPage] = useState(2);
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

    const getPaginationNumbers = () => {
        const pages = [];     
        pages.push(1);
    
        if (totalPages <= 5) {            
            for (let i = 2; i <= totalPages; i++) {
                pages.push(i);
            }
        } else if (currentPage <= 3) {           
            for (let i = 2; i <= 4; i++) {
                pages.push(i);
            }
            if (totalPages > 4) {
                pages.push('...');
                pages.push(totalPages);
            }
        } else if (currentPage >= totalPages - 2) {
          
            pages.push('...');
            for (let i = totalPages - 3; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {          
            pages.push('...');
            for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                pages.push(i);
            }
            pages.push('...');
            pages.push(totalPages);
        }
    
        return pages;
    };

    return {
        getPaginationNumbers,
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