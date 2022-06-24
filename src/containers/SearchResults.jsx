import CardContainer from "./CardContainer";

function SearchResults ({ search, setPage, setDetail, setClosestColors }) {
  const exitSearch = () => {
    setPage('')
    document.getElementById('search').value = null;
  }

  if (search.searchResults.length === 0) return (
    <div className="search-results">
      <div className="search-header">
        <h1>Search results for '{search.searchTerm}'</h1>
        <button onClick={exitSearch} className="exit-search-btn">clear search</button>
      </div>
      <h3>No results found</h3>
    </div>
  )

  else {
    return (
      <div className="search-results">
        <div className="search-header">
          <h1>Search results for '{search.searchTerm}'</h1>
          <button onClick={exitSearch} className="exit-search-btn">clear search</button>
        </div>
        <CardContainer colorsList={search.searchResults} setDetail={setDetail} setClosestColors={setClosestColors} setPage={setPage}/>
      </div>
    )
  }
}

export default SearchResults