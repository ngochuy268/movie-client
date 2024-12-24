import { Link, useNavigate } from 'react-router-dom';
import logo from '../../images/logo1.png';
import { useEffect, useRef, useState } from 'react';
import useHeaderController from '../../controllers/Header/headerController';

const Header = ({films}) => {

    const navigate = useNavigate();
    const { searchTerm, searchResults, handleInputChange , setSearchTerm, setSearchResults } = useHeaderController(films);

    const handleResultClick = (filmId) => {
        navigate(`/${filmId}`);
        setSearchTerm(''); 
        setSearchResults([]); 
    };

    const [isOpen, setIsOpen] = useState(false);
    const [ignoreOutsideClick, setIgnoreOutsideClick] = useState(false);
    const navbarRef = useRef(null);

    const toggleNavbar = () => {
        setIsOpen(prevState => !prevState);
        setIgnoreOutsideClick(true);
    };

    const handleClickOutside = (event) => {
        if (ignoreOutsideClick) {
            setIgnoreOutsideClick(false); 
            return;
        }
        if (navbarRef.current && !navbarRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };
    
    useEffect(() => {
        if (navbarRef.current) {
            const navbar = navbarRef.current;
            if (isOpen) {
                const scrollHeight = navbar.scrollHeight;
                navbar.style.height = `${scrollHeight}px`;
                navbar.style.opacity = 1;
            } else {
                navbar.style.height = '0';
                navbar.style.opacity = 0;
            }
        }
    }, [isOpen]);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ignoreOutsideClick]);
   
    return (
        <>
            <header className="ht-header">
                <div className="container">
                    <nav className="navbar navbar-default navbar-custom">
                            <div className="navbar-header logo">
                                <div className="navbar-toggle" onClick={toggleNavbar}>
                                    <span className="sr-only">Toggle navigation</span>
                                    <div id="nav-icon1">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                                <Link to="/"><img className="logo" src={logo} alt="" width="119" height="58" /></Link>
                            </div>
                            <div ref={navbarRef} className={`collapse navbar-collapse flex-parent ${isOpen ? 'show' : ''}`}                             
                            id="bs-example-navbar-collapse-1">
                                <ul className="nav navbar-nav flex-child-menu menu-left">
                                    <li className="hidden">
                                        <a href="#page-top"></a>
                                    </li>
                                    <li className="dropdown first">
                                        <Link className="btn btn-default dropdown-toggle lv1" to="/">Home</Link>
                                    </li>
                                    <li className="dropdown first"> 
                                        <Link className="btn btn-default dropdown-toggle lv1" to="/movies">Movies</Link>
                                    </li>
                                    <li className="dropdown first">
                                        <Link className="btn btn-default dropdown-toggle lv1" to="/news">News</Link>
                                    </li>                           
                                </ul>
                            </div>
                    </nav>
                    
                    <div className="top-search">                       
                        <form>
                            <input
                                type="text"
                                placeholder="Search for a movie..."
                                value={searchTerm}
                                onChange={handleInputChange}                       
                            />                        
                        </form>
                    </div>
                    {searchResults.length > 0 && (
                        <div className="search-results-dropdown" >
                            {searchResults.map((film) => (
                                <div key={film.id} 
                                    className='search-results-dropdown-list'
                                    onClick={() => handleResultClick(film.name.toLowerCase().replace(/\s+/g, '-'))}                                                                  
                                >
                                    <img src={require(`../../images/uploads/${film.poster}`)}/> <p>{film.name} ({film.releaseDate})</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </header> 
        </>
    )
}

export default Header;