import { useState } from 'react';
import { paginateItems, calculateTotalPages } from '../../models/News/newsModel';

const useNewsController = (news) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    const totalPages = calculateTotalPages(news, itemsPerPage);
    const currentItems = paginateItems(news, currentPage, itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return {
        currentItems,
        totalPages,
        currentPage,
        handlePageChange,
    };
};

export default useNewsController;