// MovieContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

type MovieContextType = {
  favorites: any[];
  addToFav: (movie: any) => void;
  removeFromFav: (movie: any) => void;
  isFavorite: (movie: any) => boolean;
};

const MovieContext = createContext<MovieContextType | undefined>(undefined);

export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error('useMovieContext must be used within a MovieProvider');
  }
  return context;
};

export const MovieProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<any[]>([]);

  const addToFav = (movie: any) => {
    setFavorites((prev) => [...prev, movie]);
  };

  const removeFromFav = (movie: any) => {
    setFavorites((prev) => prev.filter((item) => item.id === movie.id));
  };

  const isFavorite = (movie: any) => {
    return favorites.some((item) => item.id === movie.id);
  };

  return (
    <MovieContext.Provider value={{ favorites, addToFav, removeFromFav, isFavorite }}>
      {children}
    </MovieContext.Provider>
  );
};
