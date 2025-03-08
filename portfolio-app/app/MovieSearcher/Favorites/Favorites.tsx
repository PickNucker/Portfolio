import React from 'react'
import "../css/Favorites.css"
import { useMovieContext } from '../contexts/MovieContext'
import MovieCard from '@/components/MovieCard'

const Favorites = () => {
  const { favorites } = useMovieContext()

  if (favorites.length !== 0) {
    return (
      <div className="favorites-list">
        {favorites.map((movie: any) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    )
  }

  return (
    <div className='favorites-empty'>No favorites found</div>
  )
}

export default Favorites
