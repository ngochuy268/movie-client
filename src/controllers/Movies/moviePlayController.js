import { useMediaQuery } from 'react-responsive';


const useMoviePlayController = (films) => {
    
    const videoUrl = "https://videobucket-doraemon.s3.us-east-1.amazonaws.com/Doraemon+New+TV+Series+-+158.mp4";
    const isSmallScreen = useMediaQuery({ maxWidth: 991 });

    const getRandom = (arr, n) => {
        const shuffled = arr.slice();
        for (let i = shuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled.slice(0, n);
    }

    const randomFilms = getRandom(films, 9);

    return { videoUrl, isSmallScreen, randomFilms };
}

export default useMoviePlayController;