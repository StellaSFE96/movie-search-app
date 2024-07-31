import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchUpcomingMovies } from '../API/api';
import { Movie } from '../types/movieTypes';
import MovieCard from './MovieCard';

const UpcomingMoviesContainer = styled.div`
  width: 100%;
  padding: 20px;
`;

const UpcomingMoviesTitle = styled.h2`
  text-align: left;
  padding-left: 80px;
`;

const MovieGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const UpcomingMovies: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetchUpcomingMovies(); // API call to fetch upcoming movies
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching upcoming movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const topFiveMovies = movies.slice(0, 5);

  return (
    <UpcomingMoviesContainer>
      <UpcomingMoviesTitle>Upcoming Movies</UpcomingMoviesTitle>
      <MovieGrid>
        {topFiveMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </MovieGrid>
    </UpcomingMoviesContainer>
  );
};

export default UpcomingMovies;
