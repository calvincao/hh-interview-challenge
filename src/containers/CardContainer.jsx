import Card from '../components/Card'

function CardContainer({ colors, setView, setClosestColors, findClosestColors }) {
  const cards = colors.map(color => {
    return (
      <Card
        colorName={color}
        key={color}
        colors={colors}
        setView={setView}
        setClosestColors={setClosestColors}
        findClosestColors={findClosestColors}
        size="small"
      />
    )
  })
  return (
    <div id="card-container">
      {cards}
    </div>
  )
}

export default CardContainer