import MovieCard from '@/components/MovieCard'
import React from 'react'
import Home from './Home/Home'
import NavBarMovieSearcher from '@/components/NavBarMovieSearcher'

const page = () => {
  return (
    <div>
        <NavBarMovieSearcher/>
        <div className='main-content'>
            <Home/>
        </div>
    </div>
  )
}

export default page