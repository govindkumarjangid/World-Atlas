export const generatePagination = (totalPages, currentPageIndex) => {
    const pages = [];
    if (totalPages <= 5) {
        for (let i = 0; i < totalPages; i++) pages.push(i);
    } else if (currentPageIndex < 3) {
        pages.push(0, 1, 2, '...', totalPages - 3, totalPages - 2, totalPages - 1);
    } else if (currentPageIndex > totalPages - 4) {
        pages.push(0, 1, 2, '...', totalPages - 3, totalPages - 2, totalPages - 1);
    } else {
        pages.push(0, '...', currentPageIndex - 1, currentPageIndex, currentPageIndex + 1, '...', totalPages - 1);
    }
    return pages;
};
