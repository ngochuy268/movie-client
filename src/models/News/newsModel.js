export const paginateItems = (items, currentPage, itemsPerPage) => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return items.slice(indexOfFirstItem, indexOfLastItem);
};

export const calculateTotalPages = (items, itemsPerPage) => {
    return Math.ceil(items.length / itemsPerPage);
};