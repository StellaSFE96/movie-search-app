import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchPopularMovies } from '../API/api';
import { Movie } from '../types/movieTypes';
import MovieCard from './MovieCard';

const PopularMoviesContainer = styled.div`
  width: 100%;
  padding: 20px;
`;

const PopularMoviesTitle = styled.h2`
  text-align: center;
`;

const MovieGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const PopularMovies: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetchPopularMovies(); // API call to fetch popular movies
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <PopularMoviesContainer>
      <PopularMoviesTitle>Popular Movies</PopularMoviesTitle>
      <MovieGrid>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </MovieGrid>
    </PopularMoviesContainer>
  );
};

export default PopularMovies;
