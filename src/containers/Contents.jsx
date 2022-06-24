import {useState} from 'react'
import CardContainer from './CardContainer';
import Pagination from '../components/Pagination';
import DetailView from './DetailView';
import SearchResults from './SearchResults';

function Contents ({view, setView, setClosestColors, findClosestColors, colors, closestColors, search, setSearch}) {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 12;
  const indOfLast = currentPage * perPage;
  const indOfFirst = indOfLast - perPage;
  const currentColors = colors.slice(indOfFirst, indOfLast)

  if (search.viewResults === true) return (
    <SearchResults search={search} setView={setView} setSearch={setSearch} setClosestColors={setClosestColors} findClosestColors={findClosestColors}/>
  )
  else if (view !== null) return (
    <section className="contents">
      <DetailView
        view={view}
        setView={setView}
        colors={colors}
        closestColors={closestColors}
        findClosestColors={findClosestColors}
        setClosestColors={setClosestColors}
      />
    </section>
  )
  else return (
    <section className="contents">
      <CardContainer
        colors={currentColors}
        setView={setView}
        setClosestColors={setClosestColors}
        findClosestColors={findClosestColors}
      />
      <Pagination
        perPage={perPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalColors={colors.length}
      />
    </section>
  )
}

export default Contents