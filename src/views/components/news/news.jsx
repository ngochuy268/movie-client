
import ads1 from '../../../images/uploads/ads1.png';
import { Link } from 'react-router-dom';
import useNewsController from '../../../controllers/News/newsController';
import { useEffect } from 'react';


const News = ({news}) => {

    useEffect(() => {
        document.title = "News";
    })

    const {
        currentItems,
        totalPages,
        currentPage,
        handlePageChange,
    } = useNewsController(news);

    return (
        <>
            <div className="hero common-hero">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="hero-ct">
                                <h1> blog listing - list</h1>
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
                            {currentItems.map((n, index) => (
                                <div className="blog-item-style-1 blog-item-style-3" key={index}>
                                    <img src={require(`../../../images/uploads/${n.image}`)} alt="" />
                                    <div className="blog-it-infor">
                                        <h3><Link to={`/news/${n.title.toLowerCase().replace(/\s+/g, '-')}`}>{n.title}</Link></h3>
                                        <span className="time">27 Mar 2017</span>
                                        <p className='content'>{n.content}</p>
                                    </div>
                                </div>
                            ))}
                            <ul className="pagination">
                                <li className="icon-prev">
                                    <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                                        <i className="ion-ios-arrow-left"></i>
                                    </button>
                                </li>
                                {[...Array(totalPages)].map((_, index) => (
                                    <li key={index} className={currentPage === index + 1 ? 'active' : ''}>
                                        <button href="" onClick={() => handlePageChange(index + 1)}>{index + 1}</button>
                                    </li>
                                ))}
                                <li className="icon-next">
                                    <button href="" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                                        <i className="ion-ios-arrow-right"></i>
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-12 col-xs-12">
                            <div className="sidebar">                                
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

export default News;