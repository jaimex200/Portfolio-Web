import './css/NavBar.css'

export function NavBar() {
    return (
      <>
        <nav className='navBar-nav'>
          
          <div className='navBar-container'>
            
            <ul className='navbar-pages'>
              <li><a className='navbar-pages-item' href="#">About</a></li>
              <li><a className='navbar-pages-item' href="#">Work</a></li>
            </ul>
            <div className='navbar-name'><strong>JAIME</strong>MUÑOZ</div>
            <div className='navbar-section-button'>
              <a href='mailto:jlopezbarajas@gmail.com' className='navbar-button'>Contactame</a>
            </div>
          </div>
        </nav>
      </>
    )
}