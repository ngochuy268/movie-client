import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import useMoviesSingleController from '../../../controllers/Movies/moviesSingleController';

const MoviesSingle = ({films}) => {
    
    const {filmName} = useParams();
    const film = films.find(f => f.name.toLowerCase().replace(/\s+/g, '-') === filmName); 
    const { star, director, writter } = useMoviesSingleController(filmName);

    useEffect(() => {
        document.title = `${film.name}`;
        window.scrollTo(0, 0);
      }, []);

    return (
        <>
            <div className="hero mv-single-hero">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-single movie-single movie_single">
                <div className="container">
                    <div className="row ipad-width2">
                        <div className="col-md-4 col-sm-12 col-xs-12">
                            <div className="movie-img sticky-sb">
                                <img src={require(`../../../images/uploads/${film.poster}`)} alt="" />
                                <div className="movie-btn">	
                                    <div className="btn-transform transform-vertical red">
                                        <div><a href="#" className="item item-1 redbtn"> <i className="ion-play"></i> Play</a></div>
                                        <div><a href="https://drive.google.com/file/d/1Pl6UZiYNNA7gdnhsMKWaCwAPLUY0qi1L/view?usp=drive_link" className="item item-2 redbtn fancybox-media hvr-grow"><i className="ion-play"></i></a></div>
                                    </div>                                  
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 col-sm-12 col-xs-12">
                            <div className="movie-single-ct main-content">
                                    <h1 className="bd-hd">{film.name} <span>{film.releaseDate}</span></h1>
                                <div className="social-btn">
                                    <a href="#" className="parent-btn"><i className="ion-heart"></i> Add to Favorite</a>
                                    <div className="hover-bnt">
                                        <a href="#" className="parent-btn"><i className="ion-android-share-alt"></i>share</a>
                                        <div className="hvr-item">
                                            <a href="#" className="hvr-grow"><i className="ion-social-facebook"></i></a>
                                            <a href="#" className="hvr-grow"><i className="ion-social-twitter"></i></a>
                                            <a href="#" className="hvr-grow"><i className="ion-social-googleplus"></i></a>
                                            <a href="#" className="hvr-grow"><i className="ion-social-youtube"></i></a>
                                        </div>
                                    </div>		
                                </div>
                                <div className="movie-rate">
                                    <div className="rate">
                                        <i className="ion-android-star"></i>
                                        <p><span>{film.rate}</span> /10<br/>
                                            <span className="rv">56 Reviews</span>
                                        </p>
                                    </div>
                                    <div className="rate-star">
                                        <p>Rate:  </p>
                                        <i className="ion-ios-star"></i>
                                        <i className="ion-ios-star"></i>
                                        <i className="ion-ios-star"></i>
                                        <i className="ion-ios-star"></i>
                                        <i className="ion-ios-star"></i>
                                        <i className="ion-ios-star"></i>
                                        <i className="ion-ios-star"></i>
                                        <i className="ion-ios-star"></i>
                                        <i className="ion-ios-star-outline"></i>
                                    </div>
                                </div>
                                <div className="movie-tabs">
                                    <div className="tabs">
                                        <ul className="tab-links tabs-mv">
                                            <li className="active"><a href="#overview">Overview</a></li>                 
                                        </ul>
                                        <div className="tab-content">
                                            <div id="overview" className="tab active">
                                                <div className="row">
                                                    <div className="col-md-8 col-sm-12 col-xs-12">
                                                        <p>{film.description}</p>                                    
                                                        <div className="title-hd-sm">
                                                            <h4>cast</h4>
                                                            <a href="#" className="time">Full Cast & Crew  <i className="ion-ios-arrow-right"></i></a>
                                                        </div>                                                      
                                                        <div className="mvcast-item">	
                                                            {star.map((s,index) => (
                                                                <div className="cast-it" key={index}>
                                                                    <div className="cast-left">
                                                                        <img src={require(`../../../images/uploads/${s.avatar ? s.avatar : 'no-avatar.jpg'}`)} alt="" />
                                                                        <a href="#">{s.name}</a>
                                                                    </div>                                                    
                                                                </div>
                                                            ))}										                                                                            
                                                        </div>                                                                                                   
                                                    </div>
                                                    <div className="col-md-4 col-xs-12 col-sm-12">
                                                        <div className="sb-it">
                                                            <h6>Director: </h6>
                                                            <p>
                                                                {director.map((d,index) => (
                                                                    <a href="#" key={index}>{d.name}</a> 
                                                                ))}
                                                            </p>
                                                        </div>
                                                        <div className="sb-it">
                                                            <h6>Writer: </h6>
                                                            <p>
                                                                {writter.map((w,index) => (
                                                                    <a href="#" key={index}>{w.name}</a> 
                                                                ))}
                                                            </p>
                                                        </div>
                                                        <div className="sb-it">
                                                            <h6>Stars: </h6>
                                                            <p>
                                                                {star.map((s, index) => (
                                                                    <a href="#" key={index}>{s.name}, </a> 
                                                                ))}                                                        
                                                            </p>
                                                        </div>
                                                        <div className="sb-it">
                                                            <h6>Genres:</h6>
                                                            <p> <a href="#">{film.genre}</a> </p>                                                          
                                                        </div>
                                                        <div className="sb-it">
                                                            <h6>Release Date:</h6>
                                                            <p>{film.releaseDate}</p>
                                                        </div>
                                                        <div className="sb-it">
                                                            <h6>Run Time:</h6>
                                                            <p>{film.longTime} min</p>
                                                        </div>
                                                        <div className="sb-it">
                                                            <h6>MMPA Rating:</h6>
                                                            <p>{film.rate}/10</p>
                                                        </div>                                                      
                                                    </div>
                                                </div>
                                            </div>
                                        </div>                                                 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MoviesSingle;