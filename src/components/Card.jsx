
function Card({colorName}) {
  const swatchStyle = {
  borderRadius: '8px 8px 0px 0px',
  width: '100%',
  height: '15vh',
  backgroundColor: colorName
}
  return (
    <div className="card">
      <div style={swatchStyle} className="swatch"/>
      <p>{colorName}</p>
    </div>
  )
}

export default Card