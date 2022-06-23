
function Card({ colorName, setView, size }) {
  const small = {
    borderRadius: '8px 8px 0px 0px',
    width: '100%',
    height: '15vh',
    backgroundColor: colorName
  }
  const large = {
    borderRadius: '8px 8px 0px 0px',
    width: '100%',
    height: '15vh',
    backgroundColor: colorName
  }
  const viewCard = () => {
    setView(colorName);
    console.log(colorName);
  }
  return (
    <div className="card">
      <div style={size === small ? small : large} className="swatch" onClick={viewCard}/>
      <p>{colorName}</p>
    </div>
  )
}

export default Card