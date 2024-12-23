export const filterFilms = (films, searchTerm, selectedGenres, selectedRating, releaseYearFrom, releaseYearTo) => {
    return films.filter(film => {
        const matchesSearchTerm = film.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesGenre = selectedGenres.length === 0 || selectedGenres.includes(film.genre);
        const matchesRating = selectedRating ? film.rate == selectedRating : true;
        const matchesYear = film.releaseDate >= releaseYearFrom && film.releaseDate <= releaseYearTo;

        return matchesSearchTerm && matchesGenre && matchesRating && matchesYear;
    });
};

export const getGenres = (films) => {
    return [...new Set(films.map(film => film.genre))]; 
};