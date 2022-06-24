import Card from "../components/Card"
function DetailView ({ detail, setDetail, closestColors, setPage, colors, setClosestColors }) {
  const neighbors = closestColors.map(color => (
    <Card colorName={color} key={color} className="neighbor" setDetail={setDetail} colors={colors} setClosestColors={setClosestColors} setPage={setPage}/>
  ));
  const exitDetail = () => {
    setDetail(null);
    setPage('');
  }
  return (
    <section className="contents">
      <div className="detail-view">
        <Card colorName={detail} size="large"/>
        <div className="neighbor-colors">
          { neighbors }
        </div>
        <button className="clear-btn" onClick={exitDetail}>Clear</button>
      </div>
    </section>
  )
}

export default DetailView