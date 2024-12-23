export const groupFilmsByGenre = (films) => {
    return films.reduce((acc, film) => {
        const genre = film.genre;
        if (!acc[genre]) {
            acc[genre] = [];
        }
        acc[genre].push(film);
        return acc;
    }, {});
};

export const truncateContent = (content, maxLength) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength) + '...';
};