
import React from 'react';
import MovieCard from './MovieCard';

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}

interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
