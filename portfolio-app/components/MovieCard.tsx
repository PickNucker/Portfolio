'use client'
import React from 'react'
import "../app/MovieSearcher/css/MovieCard.css"
import { MovieProvider, useMovieContext } from '@/app/MovieSearcher/contexts/MovieContext'

const MovieCard = ({ movie }: any) => {

    const { favorites, addToFav, removeFromFav, isFavorite } = useMovieContext() ?? { favorites: [], addToFav: () => {}, removeFromFav: () => {}, isFavorite: () => false };
    const fav = isFavorite(movie.id);

    const onFunctionClickd = (e: React.FormEvent) => {
        e.preventDefault()
        if (fav) removeFromFav(movie.id);
        else addToFav(movie);
    };

    return (
        <div className='movie-card'>
            <div className='movie-poster'>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <div className='movie-overlay'>
                    <button
                        className={`favorite-btn ${fav ? "active" : " "}`}
                        onClick={onFunctionClickd}
                    >
                        ♥
                    </button>
                </div>
            </div>
            <div className='movie-info'>
                <h3>{movie.title}</h3>
                <p>{movie.release_date?.split("-")[0]}</p>
            </div>
        </div>
    );
}

export default MovieCard;
