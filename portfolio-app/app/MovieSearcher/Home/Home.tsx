'use client'

import "../css/Home.css";
import MovieCard from '@/components/MovieCard';
import React, { useEffect, useState } from 'react';
import { getPopularMovies, searchMovies } from "../../../services/api";


const Home = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState<{id:number}[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const getMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies ?? []);
            } catch (e: any) {
                console.log(e);
                setError(e.message || "Failed to load Movies...");
            } finally {
                setLoading(false);
            }
        }
        getMovies();
    }, []);

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!searchQuery.trim()){
            try{
                setLoading(true)
                const getPop = await getPopularMovies()
                setMovies(getPop)
            }catch(e: unknown){
                if(e instanceof Error){
                    console.log(e);
                    setError("Fehler");
                }
            }finally{
                setLoading(false)
            }
            return;
        }
        if (loading) return;

        setLoading(true);

        try {
            const searchedMovies = await searchMovies(searchQuery);
            setMovies(searchedMovies);
            setError("");
        } catch (e: any) {
            console.log(e);
            setError(e.message || "Failed to load the search for movies...");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className='home'>
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type='text'
                    placeholder='Search for movies...'
                    className='search-input'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type='submit' className='search-button'>Search</button>
            </form>

            {loading ? (
                <p>Loading movies...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <div className='movies-grid'>
                    {movies.length > 0 ? (
                        movies.map((movie) => (
                            <MovieCard movie={movie} key={movie.id} />
                        ))
                    ) : (
                        <p>No movies found</p>
                    )}
                </div>
            )}
        </div>
    )
}

export default Home;
