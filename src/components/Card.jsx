
function Card({ colors, colorName, setView, size, findClosestColors, setClosestColors }) {
  const small = {
    borderRadius: '8px 8px 0px 0px',
    width: '100%',
    height: '18vh',
    backgroundColor: colorName
  }
  const large = {
    borderRadius: '8px 8px 0px 0px',
    width: '100%',
    height: '50vh',
    backgroundColor: colorName
  }
  const mini = {
    borderRadius: '8px 8px 0px 0px',
    width: '100%',
    height: '10vh',
    backgroundColor: colorName
  }
  const viewCard = () => {
    setView(colorName);
    setClosestColors(findClosestColors(colors, colorName));
  }
  return (
    <div className="card">
      <area
        alt={colorName}
        style={size === 'small' ? small : size === 'large' ? large : mini}
        className="swatch"
        onClick={setView ? viewCard : null}
      />
      <p>{colorName}</p>
    </div>
  )
}

export default Card