function Sidebar ({ setView, colors, findClosestColors, setClosestColors, setSearch, setCategory }) {
  const viewRandomColor = () => {
    const len = colors.length;
    const randomIndex = Math.floor(Math.random() * len);
    setView(colors[randomIndex]);
    setClosestColors(findClosestColors(colors, colors[randomIndex]));
    setSearch({viewResults: false});
    setCategory({viewCategory: false});
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
    const neighbors = findClosestColors(colors, hexValues[colorName], 12);
    setCategory({viewCategory: true, name: colorName, colors: neighbors});
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