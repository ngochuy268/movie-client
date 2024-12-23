import { useState } from 'react';
import { filterFilms } from '../../models/Header/filmModel';

const useHeaderController = (films) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        setSearchResults(filterFilms(films, value));
    };

    return {
        searchTerm,
        searchResults,
        handleInputChange,
        setSearchTerm, 
        setSearchResults 
    };
};

export default useHeaderController;