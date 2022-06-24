import Pagination from "../components/Pagination";
import CardContainer from "./CardContainer";
import {useState} from 'react'

function SearchResults ({search, setSearch}) {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 12;
  const indOfLast = currentPage * perPage;
  const indOfFirst = indOfLast - perPage;
  const currentColors = search.searchResults.slice(indOfFirst, indOfLast);

  const exitSearch = () => {
    setSearch({...search, viewResults: false})
  }
  if (search.searchResults.length === 0) return (
    <div className="search-results">
      <h1>Search Results</h1>
      <h3>No results for '{search.searchTerm}'...</h3>
    </div>
  )

  else {
    return (
      <div className="search-results">
        <div className="search-header">
          <h1>Search results for '{search.searchTerm}'</h1>
          <button onClick={exitSearch} className="exit-search-btn">exit search</button>
        </div>
        <CardContainer colors={currentColors}/>
        <Pagination
          perPage={perPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalColors={search.searchResults.length}
        />
      </div>
    )
  }
}

export default SearchResults