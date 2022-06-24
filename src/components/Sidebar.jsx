function Sidebar ({ setView, colors, findClosestColors, setClosestColors, setSearch }) {
  const viewRandomColor = () => {
    const len = colors.length;
    const randomIndex = Math.floor(Math.random() * len);
    setView(colors[randomIndex]);
    setClosestColors(findClosestColors(colors, colors[randomIndex]));
    setSearch({...setSearch, viewResults: false})
  }

  return (
    <section id="sidebar">
      <button id="random-color-btn" onClick={viewRandomColor}>Random Color</button>
      <ul>
        <li><a href="!#">Red</a></li>
        <li><a href="!#">Orange</a></li>
        <li><a href="!#">Yellow</a></li>
        <li><a href="!#">Green</a></li>
        <li><a href="!#">Blue</a></li>
        <li><a href="!#">Purple</a></li>
        <li><a href="!#">Brown</a></li>
        <li><a href="!#">Gray</a></li>
      </ul>
    </section>
  )
}

export default Sidebar