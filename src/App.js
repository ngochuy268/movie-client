import { useEffect, useState } from 'react';
import { getFilms } from './controllers/App/filmController';
import { getNews } from './controllers/App/newsController';
import PacmanLoader from "react-spinners/RingLoader";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppRoutes from './routes/appRoutes';


function App() {
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [news, setNews] = useState([]);

    useEffect(() => {
        getFilms(setFilms, setLoading, setError);
    }, []);

    useEffect(() => {
        getNews(setNews);
    }, []);

    if (loading) {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                flexDirection: 'column',
                backgroundColor: '#020d18'
            }}>
                <PacmanLoader color="#FF0000" size={70} loading={loading} />
            </div>
        );
    }

    if (error) return <div>{error}</div>;

    return (
        <div className="App">
            <AppRoutes films={films} news={news} />
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
}

export default App;
