import Card from '../components/Card'
function CardContainer({colors}) {
  const cards = colors.map(color => {
    return <Card colorName={color}/>
  })
  return (
    <div id="card-container">
      {cards}
    </div>
  )
}

export default CardContainer