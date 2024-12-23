export const filterFilms = (films, searchTerm) => {
    if (!searchTerm.trim()) return [];
    return films.filter(film =>
        film.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
};