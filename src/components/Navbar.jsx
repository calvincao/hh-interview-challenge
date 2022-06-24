import logo from '../logo-symbol.svg'
function Navbar ({ colors, setSearch }) {
  const search = (e) => {
    if (e.key === "Enter"){
      if (e.target.value === '') return;
      const results = colors.filter(color => color.includes(e.target.value));
      console.log(results);
      setSearch({viewResults: true, searchResults: results, searchTerm: e.target.value})
      e.target.value = null;
    }
  }
  return (
    <nav className='navbar'>
      <img src={logo} className="" alt="logo" />
      <input type="text" onKeyDown={search} placeholder='search' id='search'/>
    </nav>
  )
}

export default Navbar