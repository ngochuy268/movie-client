import { Link, useLocation } from 'react-router-dom';

const SearchPage = ({ films }) => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('query');

    const filteredFilms = films.filter((film) =>
        (film.name.toLowerCase().includes(query?.toLowerCase() || '') || 
         film.genre.toLowerCase().includes(query?.toLowerCase() || ''))
    );

    const style = {
        width: '500px', 
        height: '150px',
        overflow: 'hidden',
        display: '-webkit-box', 
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 3
    }
    
    return (
        <>
            <div className="hero common-hero">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="hero-ct">
                                <h1>Search Result</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-single movie_list">
                <div className="container">
                    <div className="row ipad-width2">
                        <div className="col-md-8 col-sm-12 col-xs-12">
                            {filteredFilms.length > 0 ? (
                                <>                             
                                    {filteredFilms.map((f,index) => (
                                        <div className="movie-item-style-2" key={index}>
                                            <Link to={`/${f.name.toLowerCase().replace(/\s+/g, '-')}`}>
                                                <img src={require(`../../../images/uploads/${f.poster}`)} alt="" />
                                            </Link>
                                            <div className="mv-item-infor">
                                                <h6>
                                                    <Link to={`/${f.name.toLowerCase().replace(/\s+/g, '-')}`}>
                                                        {f.name} <span>({f.releaseDate})</span>
                                                    </Link>
                                                </h6>
                                                <p className="rate"><i className="ion-android-star"></i><span>{f.rate}</span> /10</p>
                                                <p className="describe" style={style}>{f.description}</p>
                                                <p className="run-time">Run Time: {f.longTime} min . <span>MMPA: {f.rate}/10</span> . <span>Release: {f.releaseDate}</span></p>
                                            </div>
                                        </div>
                                    ))}
                                </>
                            ): <p>No results found.</p> }
                        </div>
                    </div>
                </div>
            </div>
        </>       
    );
};

export default SearchPage;