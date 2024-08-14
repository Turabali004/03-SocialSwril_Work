import '../Style/Navbar.css'
function Navbar( {menuItems} ) {
   console.log(menuItems.home);
   
    
  return (
    <>
        <div className='navbar'>
          <ul className='nav-list'>
            <li className='nav-item'><a className='nav-link' href='/'>{menuItems.home}</a> </li>
            <li className='nav-item'><a className='nav-link' href='/about'>{menuItems.about}</a></li>
            <li className='nav-item'><a className='nav-link' href='/contact'>{menuItems.contact}</a></li>
          </ul>
        </div>
    </>
  )
}

export default Navbar
