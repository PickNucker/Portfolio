'use client'

import React from 'react'
import Home from './Home'
import NavBarMovieSearcher from '@/components/NavBarMovieSearcher'
import { MovieProvider } from '../contexts/MovieContext'

const page = () => {
  return (
    <div>
        <NavBarMovieSearcher/>
        <MovieProvider>
          <div><Home/></div>
        </MovieProvider>
    </div>
  )
}

export default page