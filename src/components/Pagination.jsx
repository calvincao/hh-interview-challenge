
function Pagination ({ perPage, totalColors, currentPage, setCurrentPage }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalColors / perPage); i++){
    pageNumbers.push(i);
  }
  const pages = pageNumbers.map(page => (
    <li key={page} className="page-item">
      <a
        href="!#"
        onClick={()=> setCurrentPage(page)}
        className={currentPage === page ? "current-page" : "page-link"}
      >
        {page}
      </a>
    </li>
  ));
  return (
    <ul className="pagination">
      {pages}
    </ul>
  );
}

export default Pagination;