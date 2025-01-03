import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const useHeaderController = (films) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [ignoreOutsideClick, setIgnoreOutsideClick] = useState(false);
    const navbarRef = useRef(null);
    const navigate = useNavigate();

    const toggleNavbar = () => {
        setIsOpen((prev) => !prev);
        setIgnoreOutsideClick(true);
    };

    const handleClickOutside = (event) => {
        if (window.innerWidth >= 768) return;
        if (ignoreOutsideClick) {
            setIgnoreOutsideClick(false);
            return;
        }
        if (navbarRef.current && !navbarRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    const handleResize = () => {
        if (window.innerWidth >= 768) {
            setIsOpen(true);
            if (navbarRef.current) {
                const navbar = navbarRef.current;
                navbar.style.height = 'auto';
                navbar.style.opacity = 1;
            }
        } else {
            setIsOpen(false);
            if (navbarRef.current) {
                const navbar = navbarRef.current;
                navbar.style.height = '0';
                navbar.style.opacity = 0;
            }
        }
    };

    const handleInputChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        if (value.trim() === '') {
            setSearchResults([]);
        } else {
            const filteredFilms = films.filter((film) =>
                film.name.toLowerCase().includes(value.toLowerCase())
            );
            setSearchResults(filteredFilms);
        }
    };

    const handleResultClick = (filmId) => {
        navigate(`/${filmId}`);
        setSearchTerm('');
        setSearchResults([]);
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
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ignoreOutsideClick]);

    return {
        searchTerm,
        setSearchTerm,
        searchResults,
        setSearchResults,
        handleInputChange,
        handleResultClick,
        toggleNavbar,
        navbarRef,
        setIsOpen,
        isOpen,
    };
};

export default useHeaderController;
