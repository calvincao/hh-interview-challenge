import { findClosestColors } from "../helperFuncs";

function Card({ colorsList, colorName, setDetail, size, setClosestColors, setPage }) {
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
    setDetail(colorName);
    setClosestColors(findClosestColors(colorsList, colorName));
    setPage('detail');
  }
  return (
    <div className="card">
      <area
        alt={colorName}
        style={size === 'small' ? small : size === 'large' ? large : mini}
        className="swatch"
        onClick={setDetail ? viewCard : null}
      />
      <p>{colorName}</p>
    </div>
  )
}

export default Card