'use client'

import React from 'react'
import Favorites from './Favorites'
import NavBarMovieSearcher from '@/components/NavBarMovieSearcher'
import { MovieProvider } from '../contexts/MovieContext'

const page = () => {
  return (
    <div>
        <NavBarMovieSearcher/>
        <MovieProvider>
            <Favorites/>
        </MovieProvider>
    </div>
  )
}

export default page