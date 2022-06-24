import CardContainer from './CardContainer';
import DetailView from './DetailView';
import SearchResults from './SearchResults';
import CategoryView from './CategoryView';

function Contents ({detail, setDetail, setClosestColors, colorsList, closestColors, search, category, page, setPage}) {
  if (page === 'search') return (
    <SearchResults
      search={search}
      setPage={setPage}
      setDetail={setDetail}
      setClosestColors={setClosestColors}
    />
  )
  else if (page === 'category') return (
    <CategoryView
      category={category}
      setPage={setPage}
      setDetail={setDetail}
      setClosestColors={setClosestColors}
    />
  )
  else if (page === 'detail') return (
    <DetailView
      detail={detail}
      setDetail={setDetail}
      closestColors={closestColors}
      setClosestColors={setClosestColors}
      setPage={setPage}
      colorsList={colorsList}
    />
  )
  else return (
    <CardContainer
      colorsList={colorsList}
      setDetail={setDetail}
      setClosestColors={setClosestColors}
      setPage={setPage}
    />
  )
}

export default Contents