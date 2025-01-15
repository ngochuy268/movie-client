import ads1 from '../../../images/uploads/ads1.png';
import { Link } from 'react-router-dom';
import useMoviesController from '../../../controllers/Movies/movieController';
import { useEffect } from 'react';

const Movies = ({ films }) => {

    useEffect(() => {
        document.title = "Movie List";
    })
 
    const {
        getPaginationNumbers,
        currentFilms,
        genres,
        handleSubmit,
        searchTerm,
        setSearchTerm,
        selectedGenres,
        setSelectedGenres,
        selectedRating,
        setSelectedRating,
        releaseYearFrom,
        setReleaseYearFrom,
        releaseYearTo,
        setReleaseYearTo,
        currentPage,
        totalPages,
        handleNextPage,
        handlePrevPage,
        isSearched,
        setIsSearched,
        setFilmsPerPage,
        setCurrentPage
    } = useMoviesController(films);
    
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
                                <h1>Movie Listing - List</h1>
                                <ul className="breadcumb">
                                    <li className="active"><Link to={`/`}>Movie</Link></li>
                                    <li><span className="ion-ios-arrow-right"></span> Movie Listing</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-single movie_list">
                <div className="container">
                    <div className="row ipad-width2">
                        <div className="col-md-8 col-sm-12 col-xs-12">
                            {!isSearched ? (
                                <>
                                    {currentFilms.map((f, index) => (
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
                            ) : (
                                <>
                                    {currentFilms.length > 0 ? (
                                        currentFilms.map((f, index) => (
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
                                        ))
                                    ) : (
                                        <p>No movies found matching your criteria.</p>
                                    )}
                                </>
                            )}
                            {!isSearched && (
                                <div className="topbar-filter">
                                    <label>Movies per page:</label>
                                    <select onChange={(e) => {
                                        setFilmsPerPage(Number(e.target.value));
                                        setCurrentPage(1);
                                    }}>
                                        <option value="2">2 Movies</option>
                                        <option value="5">5 Movies</option>
                                    </select>
                                    <div className="pagination2">
                                    <button onClick={handlePrevPage} disabled={currentPage === 1}>
                                        &#9664;
                                    </button>
                                    {getPaginationNumbers().map((page, index) => (
                                        <a
                                            key={index}
                                            className={currentPage === page ? 'active' : ''}
                                            onClick={() => page !== '...' && setCurrentPage(page)}
                                            style={{ cursor: page === '...' ? 'default' : 'pointer' }}
                                        >
                                            {page}
                                        </a>
                                    ))}
                                    <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                                        &#9654;
                                    </button>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="col-md-4 col-sm-12 col-xs-12">
                            <div className="sidebar">
                                <div className="searh-form">
                                    <h4 className="sb-title">Search for movie</h4>
                                    <form className="form-style-1" onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-md-12 form-it">
                                                <label>Movie name</label>
                                                <input type="text" placeholder="Enter keywords"
                                                    value={searchTerm}
                                                    onChange={(e) => setSearchTerm(e.target.value)}
                                                />
                                            </div>
                                            <div className="col-md-12 form-it">
                                                <label>Genres & Subgenres</label>
                                                <div className="group-ip">
                                                    <select
                                                        name="genres" className="ui fluid dropdown"
                                                        value={selectedGenres}
                                                        onChange={(e) => {
                                                            const options = e.target.options;
                                                            const value = [];
                                                            for (let i = 0; i < options.length; i++) {
                                                                if (options[i].selected) {
                                                                    value.push(options[i].value);
                                                                }
                                                            }
                                                            setSelectedGenres(value);
                                                        }}
                                                    >
                                                        <option value="">Enter to filter genres</option>
                                                        {genres.map((genre, index) => (
                                                            <option key={index} value={genre}>{genre}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-12 form-it">
                                                <label>Rating Range</label>
                                                <select
                                                    value={selectedRating}
                                                    onChange={(e) => setSelectedRating(e.target.value)}
                                                >
                                                    <option value="">-- Select the rating range below --</option>
                                                    {[...Array(10)].map((_, index) => (
                                                        <option key={index + 1} value={index + 1}>{index + 1}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="col-md-12 form-it">
                                                <label>Release Year</label>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <select
                                                            value={releaseYearFrom}
                                                            onChange={(e) => setReleaseYearFrom(e.target.value)}
                                                        >
                                                            <option value="1980">From</option>
                                                            {[...Array(2025 - 1980)].map((_, index) => (
                                                                <option key={index} value={1980 + index}>{1980 + index}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <select
                                                            value={releaseYearTo}
                                                            onChange={(e) => setReleaseYearTo(e.target.value)}
                                                        >
                                                            <option value="2024">To</option>
                                                            {[...Array(2025 - 1980)].map((_, index) => (
                                                                <option key={index} value={2024 - index}>{2024 - index}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12 ">
                                                <input className="submit" type="submit" value="Search" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="ads">
                                    <img src={ads1} alt="" />
                                </div>
                                <div className="sb-facebook sb-it">
                                    <h4 className="sb-title">Find us on Facebook</h4>
                                </div>
                                <div className="sb-twitter sb-it">
                                    <h4 className="sb-title">Tweet to us</h4>
                                    <div className="slick-tw">
                                        <div className="tweet item" id=""></div>
                                        <div className="tweet item" id=""></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Movies;