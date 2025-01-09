import ava1 from '../../../images/uploads/ava1.jpg';
import ava2 from '../../../images/uploads/ava2.jpg';
import ava3 from '../../../images/uploads/ava3.jpg';
import ava4 from '../../../images/uploads/ava4.jpg';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import useHomeController from '../../../controllers/Home/homeController';
import { settings, settings2 } from '../../../controllers/Home/sliderSettings';
import { useEffect } from 'react';


const Home = ({films, news}) => {

    const { groupedFilms } = useHomeController(films);

    useEffect(() => {
        document.title = 'Home';
    })
 
   
    return (
        <>
            <div className="slider movie-items">
                <div className="container">
                    <div className="row">
                        <div className="social-link">
                            <p>Follow us: </p>
                            <a href="#"><i className="ion-social-facebook"></i></a>
                            <a href="#"><i className="ion-social-twitter"></i></a>
                            <a href="#"><i className="ion-social-googleplus"></i></a>
                            <a href="#"><i className="ion-social-youtube"></i></a>
                        </div>
                        <Slider {...settings} className="slick-multiItemSlider">
                            {films.map((film, index) => (
                                 
                                <div className="movie-item" key={index} style={{borderRadius: '10px !important'}}>
                                <div className="mv-img" style={{borderRadius: '10px !important'}}>
                                    <a href={`/${film.name.toLowerCase().replace(/\s+/g, '-')}`}><img  style={{borderRadius: '10px !important'}} src={require(`../../../images/uploads/${film.poster}`)} alt="" width="285" height="437" /></a>
                                </div>
                                <div className="title-in">
                                    <div className="cate">
                                        <span className="blue"><a href="#">{film.genre}</a></span>
                                    </div>
                                    <h3><Link to={`/${film.name.toLowerCase().replace(/\s+/g, '-')}`}>{film.name}</Link></h3>
                                    <p><i className="ion-android-star"></i><span>{film.rate}</span> /10</p>
                                </div>
                            </div>
                            ))}                                                         
                        </Slider>
	                </div>
	            </div>
            </div>
            <div className="movie-items">
                <div className="container">
                    <div className="row ipad-width">
                        <div className="col-md-8">    
                            {Object.keys(groupedFilms).map((genre,index) => (
                                <>                     
                                    <div className="title-hd" key={index}>
                                        <h2>{genre}</h2>
                                        <a href="#" className="viewall">View all <i className="ion-ios-arrow-right"></i></a>
                                    </div>
                                    <div className="tabs">
                                        <ul className="tab-links">
                                            <li className="active"><a href="#tab1">#Popular</a></li>
                                            <li><a href="#tab2"> #Coming soon</a></li>
                                            <li><a href="#tab3">  #Top rated  </a></li>
                                            <li><a href="#tab4"> #Most reviewed</a></li>                        
                                        </ul>
                                        <div className="tab-content">
                                            <div id="tab1" className="tab active">
                                                <div className="row">
                                                    <Slider {...settings2} className="slick-multiItem">
                                                        {groupedFilms[genre].map((film, index) => (
                                                            <div className="slide-it" key={index}>
                                                            <div className="movie-item">
                                                                <div className="mv-img">
                                                                    <img src={require(`../../../images/uploads/${film.poster}`)} alt="" width="185" height="284"/>
                                                                </div> 
                                                                <div className="hvr-inner">
                                                                    <Link to={`/${film.name.toLowerCase().replace(/\s+/g, '-')}`}> Read more <i className="ion-android-arrow-dropright"></i> </Link>
                                                                </div>
                                                                <div className="title-in">
                                                                    <h6><a href="#">{film.name}</a></h6>
                                                                    <p><i className="ion-android-star"></i><span>{film.rate}</span> /10</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        ))}
                                                    </Slider>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>  
                            ))}
                        </div>
                        <div className="col-md-4">
                            <div className="sidebar">
                                <div className="ads">
                                </div>
                                <div className="celebrities">
                                    <h4 className="sb-title">Spotlight Celebrities</h4>
                                    <div className="celeb-item">
                                        <a href="#"><img src={ava1} alt="" width="70" height="70"/></a>
                                        <div className="celeb-author">
                                            <h6><a href="#">Samuel N. Jack</a></h6>
                                            <span>Actor</span>
                                        </div>
                                    </div>
                                    <div className="celeb-item">
                                        <a href="#"><img src={ava2} alt="" width="70" height="70"/></a>
                                        <div className="celeb-author">
                                            <h6><a href="#">Benjamin Carroll</a></h6>
                                            <span>Actor</span>
                                        </div>
                                    </div>
                                    <div className="celeb-item">
                                        <a href="#"><img src={ava3} alt="" width="70" height="70"/></a>
                                        <div className="celeb-author">
                                            <h6><a href="#">Beverly Griffin</a></h6>
                                            <span>Actor</span>
                                        </div>
                                    </div>
                                    <div className="celeb-item">
                                        <a href="#"><img src={ava4} alt="" width="70" height="70"/></a>
                                        <div className="celeb-author">
                                            <h6><a href="#">Justin Weaver</a></h6>
                                            <span>Actor</span>
                                        </div>
                                    </div>
                                    <a href="#" className="btn">See all celebrities<i className="ion-ios-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;