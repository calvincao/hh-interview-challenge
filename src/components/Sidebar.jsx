import { findClosestColors } from "../helperFuncs";

function Sidebar ({ setDetail, colorsList, setClosestColors, setCategory, setPage }) {
  const viewRandomColor = () => {
    const len = colorsList.length;
    const randomIndex = Math.floor(Math.random() * len);
    setDetail(colorsList[randomIndex]);
    setClosestColors(findClosestColors(colorsList, colorsList[randomIndex]));
    setPage('detail');
  }
  const viewCategory = (e) => {
    const hexValues = {
      'Red': '#FF0000',
      'Orange': '#FFA500',
      'Yellow': '#FFFF00',
      'Green': '#00FF00',
      'Blue': '#0000FF',
      'Purple': '#800080',
      'Brown': '#964B00',
      'Gray': '#808080'
    };
    const colorName = e.target.innerText;
    const neighbors = findClosestColors(colorsList, hexValues[colorName], 12);
    setCategory({ name: colorName, colors: neighbors });
    setPage('category');
  }

  return (
    <section id="sidebar">
      <button id="random-color-btn" onClick={viewRandomColor}>Random Color</button>
      <ul>
        <li><a onClick={viewCategory} href="!#">Red</a></li>
        <li><a onClick={viewCategory} href="!#">Orange</a></li>
        <li><a onClick={viewCategory} href="!#">Yellow</a></li>
        <li><a onClick={viewCategory} href="!#">Green</a></li>
        <li><a onClick={viewCategory} href="!#">Blue</a></li>
        <li><a onClick={viewCategory} href="!#">Purple</a></li>
        <li><a onClick={viewCategory} href="!#">Brown</a></li>
        <li><a onClick={viewCategory} href="!#">Gray</a></li>
      </ul>
    </section>
  )
}

export default Sidebar