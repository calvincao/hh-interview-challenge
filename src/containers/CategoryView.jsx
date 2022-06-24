import CardContainer from "./CardContainer";

function CategoryView ({category, setPage}) {

  const exitCategory = () => {
    setPage('')
  }

  return (
    <div className="search-results">
      <div className="search-header">
        <h1>Colors similar to '{category.name}'</h1>
        <button onClick={exitCategory} className="exit-search-btn">clear</button>
      </div>
      <CardContainer colors={category.colors}/>
    </div>
  )
}

export default CategoryView