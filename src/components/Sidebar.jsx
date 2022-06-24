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
        <li>Red</li>
        <li>Orange</li>
        <li>Yellow</li>
        <li>Green</li>
        <li>Blue</li>
        <li>Purple</li>
        <li>Brown</li>
        <li>Gray</li>
      </ul>
    </section>
  )
}

export default Sidebar