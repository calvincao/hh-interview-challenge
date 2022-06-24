import Card from "../components/Card"
function DetailView ({ view, setView, closestColors }) {
  const neighbors = closestColors.map(color => (
    <Card colorName={color} key={color} className="neighbor"/>
  ));
  return (
    <div className="detail-view">
      <Card colorName={view} size="large"/>
      <div className="neighbor-colors">
        { neighbors }
      </div>
      <button className="clear-btn" onClick={()=>setView(null)}>Clear</button>
    </div>
  )
}

export default DetailView