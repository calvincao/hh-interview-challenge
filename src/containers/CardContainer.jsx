import Card from '../components/Card'

function CardContainer({ colors, setView }) {
  const cards = colors.map(color => {
    return <Card colorName={color} key={color} setView={setView} size="small"/>
  })
  return (
    <div id="card-container">
      {cards}
    </div>
  )
}

export default CardContainer