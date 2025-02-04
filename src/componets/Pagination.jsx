const Pagination = ({
  length = 0,
  limitPerPage = 10,
  currentPage,
  setCurrentPage
}) => {
  const totalPages = Math.ceil(length / limitPerPage);

  const handleCurrentPage = (index) => {
    setCurrentPage(index);
  }
  const handlePrev = () => {
    setCurrentPage((prevPage) => prevPage <= 0 ? prevPage : prevPage - 1)
  }

  const handleNext = () => {
    setCurrentPage((prevPage => prevPage >= totalPages - 1 ? prevPage : prevPage + 1))
  }

  return <div className="pagination-container">
    <button
      className="pagination-button"
      onClick={handlePrev}
      disabled={currentPage === 0}
    >
      Prev
    </button>
    {
      [...Array(totalPages).keys()].map((page, index) => (
        <button
          key={page}
          className={"pagination-button " + (currentPage === index ? "active-page" : "")}
          onClick={() => handleCurrentPage(index)}>
          {page + 1}
        </button>
      ))
    }
    <button 
      className="pagination-button" 
      onClick={handleNext}
      disabled={currentPage === totalPages-1}
      >
        Next
        </button>
  </div>;
};

export default Pagination;
