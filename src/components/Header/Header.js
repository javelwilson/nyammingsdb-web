import React, { useState } from 'react'
import './Header.css'

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false)

  const toggleMenu = () => {
    setMenuActive(!menuActive)
  }

  return (
    <header className='header'>
      <div className='container container--header'>
        <div className='header__logo'>
          <h2>NyammingsDB</h2>
          <i className='fas fa-hamburger'></i>
        </div>

        <div className='header__menu-icon' onClick={toggleMenu}>
          <i className={menuActive ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>

          <ul
            className={
              menuActive ? 'header__menu header__menu--active' : 'header__menu'
            }
          >
            <li>
              <a className='header__menu-link' href='#' onClick={toggleMenu}>
                Home
              </a>
            </li>
            <li>
              <a className='header__menu-link' href='#' onClick={toggleMenu}>
                Features
              </a>
            </li>
            <li>
              <a className='header__menu-link' href='#' onClick={toggleMenu}>
                Docs
              </a>
            </li>
            <li>
              <a className='header__menu-link' href='#' onClick={toggleMenu}>
                Login
              </a>
            </li>
            <li>
              <a className='header__menu-link' href='#' onClick={toggleMenu}>
                Register
              </a>
            </li>
          </ul>
      </div>
    </header>
  )
}

export default Navbar