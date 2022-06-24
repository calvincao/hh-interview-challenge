import Card from '../components/Card'
import Pagination from '../components/Pagination'
import {useState} from 'react'

function CardContainer({ colors, setDetail, setClosestColors, setPage }) {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 12;
  const indOfLast = currentPage * perPage;
  const indOfFirst = indOfLast - perPage;
  const currentColors = colors.slice(indOfFirst, indOfLast)
  
  const cards = currentColors.map(color => {
    return (
      <Card
        colorName={color}
        key={color}
        colors={colors}
        setDetail={setDetail}
        setPage={setPage}
        setClosestColors={setClosestColors}
        size="small"
      />
    )
  })
  return (
    <section className="contents">
      <div id="card-container">
        {cards}
      </div>
      <Pagination
        perPage={perPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalColors={colors.length}
      />
    </section>
  )
}

export default CardContainer