import Pagination from "../components/Pagination";
import CardContainer from "./CardContainer";
import {useState} from 'react'

function CategoryView ({category, setCategory}) {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 12;
  const indOfLast = currentPage * perPage;
  const indOfFirst = indOfLast - perPage;
  const currentColors = category.colors.slice(indOfFirst, indOfLast);

  const exitCategory = () => {
    setCategory({viewCategory: false})
  }

  return (
    <div className="search-results">
      <CardContainer colors={currentColors}/>
      <Pagination
        perPage={perPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalColors={category.colors.length}
      />
    </div>
  )
}

export default CategoryView