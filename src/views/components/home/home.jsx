import ava1 from '../../../images/uploads/ava1.jpg';
import ava2 from '../../../images/uploads/ava2.jpg';
import ava3 from '../../../images/uploads/ava3.jpg';
import ava4 from '../../../images/uploads/ava4.jpg';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import useHomeController from '../../../controllers/Home/homeController';
import { truncateContent } from '../../../models/Home/filmModel'; 
import { settings, settings2 } from '../../../controllers/Home/sliderSettings';
import { useEffect } from 'react';


const Home = ({films, news}) => {

    const { groupedFilms } = useHomeController(films);
    const getRandomNews = (newsArray) => {
        if (newsArray.length === 0) return null; 
        const randomIndex = Math.floor(Math.random() * newsArray.length);
        return newsArray[randomIndex];
    };
    const randomNews = getRandomNews(news);

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
                                    <a href=""><img style={{borderRadius: '10px !important'}} src={require(`../../../images/uploads/${film.poster}`)} alt="" width="285" height="437" /></a>
                                </div>
                                <div className="title-in">
                                    <div className="cate">
                                        <span className="blue"><a href="#">{film.genre}</a></span>
                                    </div>
                                    <h6><Link to={`/${film.name.toLowerCase().replace(/\s+/g, '-')}`}>{film.name}</Link></h6>
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
            <div className="latestnew">
                <div className="container">
                    <div className="row ipad-width">
                        <div className="col-md-8">
                            <div className="title-hd">
                                <h2>Latest news</h2>
                            </div>
                            <div className="tabs">                   
                                <div className="tab-content">
                                    <div id="tab31" className="tab active">
                                        <div className="row">
                                            <div className="blog-item-style-1">
                                                <img src={require(`../../../images/uploads/${randomNews.image}`)} alt="" width="170" height="250"/>
                                                <div className="blog-it-infor">
                                                    <h3><Link to={`/news/${randomNews.title.toLowerCase().replace(/\s+/g, '-')}`}>{randomNews.title}</Link></h3>
                                                    <span className="time">13 hours ago</span>
                                                    <p>{truncateContent(randomNews.content, 300)}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="morenew">
                                <div className="title-hd">
                                    <h3>More news on Blockbuster</h3>
                                    <a href="#" className="viewall">See all Movies news<i className="ion-ios-arrow-right"></i></a>
                                </div>
                                <div className="more-items">
                                    <div className="left">
                                        <div className="more-it">
                                            <h6><a href="#">Michael Shannon Frontrunner to play Cable in “Deadpool 2”</a></h6>
                                            <span className="time">13 hours ago</span>
                                        </div>
                                        <div className="more-it">
                                            <h6><a href="#">French cannibal horror “Raw” inspires L.A. theater to hand out “Barf Bags”</a></h6>
                                            
                                            <span className="time">13 hours ago</span>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="more-it">
                                            <h6><a href="#">Laura Dern in talks to join Justin Kelly’s biopic “JT Leroy”</a></h6>
                                            <span className="time">13 hours ago</span>
                                        </div>
                                        <div className="more-it">
                                            <h6><a href="#">China punishes more than 300 cinemas for box office cheating</a></h6>
                                            <span className="time">13 hours ago</span>
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

export default Home;