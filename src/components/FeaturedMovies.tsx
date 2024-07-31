// src/components/FeaturedMovies.tsx
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchFeaturedMovies } from '../API/api'; // Replace this with your actual API call
import { Movie } from '../types/movieTypes';
import MovieCard from './MovieCard';

const FeaturedMoviesContainer = styled.div`
  width: 100%;
  padding: 20px;
`;

const FeaturedMoviesTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const MovieGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const FeaturedMovies: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetchFeaturedMovies(); // API call to fetch featured movies
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching featured movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <FeaturedMoviesContainer>
      <FeaturedMoviesTitle>Featured Movies</FeaturedMoviesTitle>
      <MovieGrid>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </MovieGrid>
    </FeaturedMoviesContainer>
  );
};

export default FeaturedMovies;
