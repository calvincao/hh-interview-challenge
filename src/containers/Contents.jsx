import CardContainer from './CardContainer';
import DetailView from './DetailView';
import SearchResults from './SearchResults';
import CategoryView from './CategoryView';

function Contents ({detail, setDetail, setClosestColors, colors, closestColors, search, category, page, setPage}) {
  if (page === 'search') return (
    <SearchResults
      search={search}
      setPage={setPage}
    />
  )
  else if (page === 'category') return (
    <CategoryView
      category={category}
      setPage={setPage}
    />
  )
  else if (page === 'detail') return (
    <DetailView
      detail={detail}
      setDetail={setDetail}
      closestColors={closestColors}
      setClosestColors={setClosestColors}
      setPage={setPage}
      colors={colors}
    />
  )
  else return (
    <CardContainer
      colors={colors}
      setDetail={setDetail}
      setClosestColors={setClosestColors}
      setPage={setPage}
    />
  )
}

export default Contents