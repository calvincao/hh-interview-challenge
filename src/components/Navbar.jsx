import logo from '../logo-symbol.svg'
function Navbar ({ colors, setSearch, setPage }) {
  const search = (e) => {
    if (e.target.value === ''){
      setPage('');
      return;
    }
    const results = colors.filter(color => color.includes(e.target.value));
    setSearch({ searchResults: results, searchTerm: e.target.value })
    setPage('search');
  }

  return (
    <nav className='navbar'>
      <img src={logo} className="" alt="logo" />
      <input type="text" onChange={search} placeholder='search' id='search'/>
    </nav>
  )
}

export default Navbar