
import { useEffect } from 'react';
import ads1 from '../../../images/uploads/ads1.png';
import { useParams } from 'react-router-dom';

const NewsSingle = ({news}) => {
    
    const { newsTitle} = useParams();
    const newsSingle = news.find(n => n.title.toLowerCase().replace(/\s+/g, '-') === newsTitle); 

    useEffect(() => {
        document.title = `${newsSingle.title}`;
    })


    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <>
            <div className="hero common-hero">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="hero-ct">
                                <h1> blog detail</h1>
                                <ul className="breadcumb">
                                    <li className="active"><a href="#">Home</a></li>
                                    <li> <span className="ion-ios-arrow-right"></span> blog listing</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-single">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 col-sm-12 col-xs-12">
                            <div className="blog-detail-ct">
                                
                                {newsSingle?.title && (<h1>{newsSingle.title}</h1>)}
                                <span className="time">27 Mar 2017</span>
                                <img src={require(`../../../images/uploads/${newsSingle.image}`)} alt="" />
                                <p>
                                    {newsSingle.content}
                                </p>                                                        
                                <div className="flex-it share-tag">
                                    <div className="social-link">
                                        <h4>Share it</h4>
                                        <a href="#"><i className="ion-social-facebook"></i></a>
                                        <a href="#"><i className="ion-social-twitter"></i></a>
                                        <a href="#"><i className="ion-social-googleplus"></i></a>
                                        <a href="#"><i className="ion-social-pinterest"></i></a>
                                        <a href="#"><i className="ion-social-linkedin"></i></a>
                                    </div>
                                    <div className="right-it">
                                        <h4>Tags</h4>
                                        <a href="#">Gray,</a>
                                        <a href="#">Film,</a>
                                        <a href="#">Poster</a>
                                    </div>
                                </div>                                                          
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12 col-xs-12">
                            <div className="sidebar">                               
                                <div className="sb-cate sb-it">
                                    <h4 className="sb-title">Categories</h4>
                                    <ul>
                                        <li><a href="#">Awards (50)</a></li>
                                        <li><a href="#">Box office (38)</a></li>
                                        <li><a href="#">Film reviews (72)</a></li>
                                        <li><a href="#">News (45)</a></li>
                                        <li><a href="#">Global (06)</a></li>
                                    </ul>
                                </div>
                                <div className="sb-recentpost sb-it">
                                    <h4 className="sb-title">most popular</h4>
                                    <div className="recent-item">
                                        <span>01</span><h6><a href="#">Korea Box Office: Beauty and the Beast Wins Fourth</a></h6>
                                    </div>
                                    <div className="recent-item">
                                        <span>02</span><h6><a href="#">Homeland Finale Includes Shocking Death </a></h6>
                                    </div>
                                    <div className="recent-item">
                                        <span>03</span><h6><a href="#">Fate of the Furious Reviews What the Critics Saying</a></h6>
                                    </div>
                                </div>
                                <div className="sb-tags sb-it">
                                    <h4 className="sb-title">tags</h4>
                                    <ul className="tag-items">
                                        <li><a href="#">Batman</a></li>
                                        <li><a href="#">film</a></li>
                                        <li><a href="#">homeland</a></li>
                                        <li><a href="#">Fast & Furious</a></li>
                                        <li><a href="#">Dead Walker</a></li>
                                        <li><a href="#">King</a></li>
                                        <li><a href="#">Beauty</a></li>
                                    </ul>
                                </div>
                                <div className="ads">
                                    <img src={ads1} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsSingle;