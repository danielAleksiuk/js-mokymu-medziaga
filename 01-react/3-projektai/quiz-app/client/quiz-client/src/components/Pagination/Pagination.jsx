const Pagination = ({title, currentPage, pageInTotal}) => {
    return (
        <>
            {title} {currentPage} of {pageInTotal}
        </>
    );
}

export default Pagination;