import logo from '../logo-symbol.svg'
function Navbar ({ colors, setSearch }) {
  const search = (e) => {
    if (e.target.value === ''){
      setSearch({...search, viewResults: false});
      return;
    }
    const results = colors.filter(color => color.includes(e.target.value));
    setSearch({viewResults: true, searchResults: results, searchTerm: e.target.value})
  }
  return (
    <nav className='navbar'>
      <img src={logo} className="" alt="logo" />
      <input type="text" onChange={search} placeholder='search' id='search'/>
    </nav>
  )
}

export default Navbar