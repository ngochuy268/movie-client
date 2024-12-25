import { fetchFilms } from "../../models/App/filmsModel";

export const getFilms = async (setFilms, setLoading, setError) => {
    try {
        setLoading(true);
        const data = await fetchFilms();
        setFilms(data);
        setError(null);
    } catch (error) {
        console.error('Error fetching films:', error);
        setError('Error loading films. Please try again later.');
    } finally {
        setLoading(false);
    }
};
