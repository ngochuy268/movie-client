import { Link } from 'react-router-dom';
import logo from '../../images/logo1.png';
import useHeaderController from '../../controllers/Header/headerController';

const Header = ({films}) => {
  
    const {
        searchTerm,
        handleInputChange,
        handleSearchSubmit,
        toggleNavbar,
        navbarRef,
        isOpen,
        setIsOpen
    } = useHeaderController(films);
   
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
                            <div ref={navbarRef}  className={`collapse navbar-collapse flex-parent ${isOpen ? 'show' : ''}`}                            
                            id="bs-example-navbar-collapse-1">
                                <ul className="nav navbar-nav flex-child-menu menu-left">
                                    <li className="hidden">
                                        <a href="#page-top"></a>
                                    </li>
                                    <li className="dropdown first">
                                        <Link className="btn btn-default dropdown-toggle lv1" to="/" onClick={() => {if (window.innerWidth <= 991) setIsOpen(false)}}>Home</Link>
                                    </li>
                                    <li className="dropdown first"> 
                                        <Link className="btn btn-default dropdown-toggle lv1" to="/movies" onClick={() => {if (window.innerWidth <= 991) setIsOpen(false)}}>Movies</Link>
                                    </li>
                                    <li className="dropdown first">
                                        <Link className="btn btn-default dropdown-toggle lv1" to="/news" onClick={() => {if (window.innerWidth <= 991) setIsOpen(false)}}>News</Link>
                                    </li>                           
                                </ul>
                            </div>
                    </nav>
                    
                    <div className="top-search">                       
                        <form onSubmit={handleSearchSubmit}>
                            <input
                                type="text"
                                placeholder="Search for a movie..."
                                value={searchTerm}
                                onChange={handleInputChange}                       
                            />     
                              <button type="submit" className="search-icon">
                                🔍
                            </button>                   
                        </form>
                        
                    </div>              
                </div>
            </header> 
        </>
    )
}

export default Header;


