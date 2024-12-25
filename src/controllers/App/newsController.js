import { fetchNews } from "../../models/App/newsModel";

export const getNews = async (setNews) => {
    try {
        const data = await fetchNews();
        setNews(data);
    } catch (error) {
        console.error('Error fetching news:', error);
    }
};
