import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";

import './App.css';
import Layout from './views/layouts';
import Home from './views/components/home/home';
import Movies from './views/components/movies/movies';
import News from './views/components/news/news';
import MoviesSingle from './views/components/movies/moviesSingle';
import NewsSingle from './views/components/news/newsSingle';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PacmanLoader from "react-spinners/RingLoader";
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 


function App() {

  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/film`);
        setFilms(response.data);
        setError(null);
      } catch (error) {
        console.error('Error fetching films:', error);
        setError('Error loading films. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchFilms();
  }, []);

  useEffect(() => {
    const fetchNews = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/news`);
            setNews(response.data); 
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    };
    fetchNews();
}, []);




  if(loading) return (
    <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        flexDirection: 'column',
        backgroundColor: '#020d18'
    }}>
        <PacmanLoader
            color="#FF0000"
            size={70}
            loading={loading}
        />
    </div>
  );

 if (error) return <div>{error}</div>;


  
  return (

    <div className="App">
      <Routes>
        <Route path="/" element={<Layout films={films} />}>
          <Route index element={<Home films={films} news={news}/>} />
          <Route path="/movies" element={<Movies films={films} />} />
          <Route path="/news" element={<News news={news} />} />
          <Route path="/:filmName" element={<MoviesSingle films={films} />} />
          <Route path="/news/:newsTitle" element={<NewsSingle news={news} loading={loading}/>} />
        </Route>
      </Routes>
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
