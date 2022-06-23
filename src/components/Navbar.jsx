import logo from '../logo-symbol.svg'
function Navbar () {
  return (
    <nav className='navbar'>
      <img src={logo} className="" alt="logo" />
      <input type="text" placeholder='search' id='search'/>
    </nav>
  )
}

export default Navbar