import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBookmark, faCamera, faCircleExclamation, faComment, faForward, faLightbulb, faWindowRestore } from '@fortawesome/free-solid-svg-icons';
import useMoviePlayController from "../../../controllers/Movies/moviePlayController";

const MoviePlay = ({films}) => {
    const { isSmallScreen, randomFilms, videoUrl } = useMoviePlayController(films);
 
    return (
        <>
            <div className="hero common-hero">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="hero-ct">
                                <h1>Movie Play</h1>
                                <ul className="breadcumb">
                                    <li className="active"><Link to={`/movies`}>Movie</Link></li>
                                    <li><span className="ion-ios-arrow-right"></span> Play</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-single movie_play">
                <div className="container">
                    <div className="row ipad-width2">
                        <div className="col-md-8 col-sm-8 col-xs-8">
                            <video height="360" controls style={{ width: '100%' }}>
                                <source src={videoUrl} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="function-menu">
                                <div className="func-btn">
                                    <FontAwesomeIcon className="func-icon" icon={faForward} />
                                    <p className="">Next</p>
                                </div>
                                <div className="func-btn">
                                    <FontAwesomeIcon className="func-icon" icon={faComment} />
                                    <p className="">Comment</p>
                                </div>
                                <div className="func-btn">
                                    <FontAwesomeIcon className="func-icon" icon={faLightbulb} />
                                    <p className="">Light</p>
                                </div>
                                <div className="func-btn">
                                    <FontAwesomeIcon className="func-icon" icon={faBookmark} />
                                    <p className="">Follow</p>
                                </div>
                                <div className="func-btn">
                                    <FontAwesomeIcon className="func-icon" icon={faWindowRestore} />
                                    <p className="">Zoom</p>
                                </div>
                                <div className="func-btn">
                                    <FontAwesomeIcon className="func-icon" icon={faCircleExclamation} />
                                    <p className="">Announce</p>
                                </div>
                                <div className="func-btn">
                                    <FontAwesomeIcon className="func-icon" icon={faCamera} />
                                    <p className="">Photo</p>
                                </div>
                            </div>
                        </div>
                        <div className={isSmallScreen ? 'col-md-8 col-sm-8 col-xs-8' : 'col-md-4 col-sm-4 col-xs-4'}>
                            <div className="latest-update">
                                <h4 class="sb-title">most popular</h4>
                                {randomFilms.map((f,index) =>(
                                    <p key={index}>
                                        <Link to={`/${f.name.toLowerCase().replace(/\s+/g, '-')}`}>{f.name}</Link>
                                    </p>
                                ))}                                                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MoviePlay;