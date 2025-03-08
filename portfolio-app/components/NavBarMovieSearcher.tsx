import Link from 'next/link'
import React from 'react'
import "../app/MovieSearcher/css/Navbar.css"


const NavBarMovieSearcher = () => {
  return (
    <nav className='navbar'>
        <div className='navbarBrand'>
            <Link href="/MovieSearcher/Home">Movie App</Link>
        </div>
        <div className='navbar-links'>
            <Link href="/MovieSearcher/Home">Home</Link>
            <Link href="/MovieSearcher/Favorites">Favorites</Link>
        </div>
    </nav>
  )
}

export default NavBarMovieSearcher