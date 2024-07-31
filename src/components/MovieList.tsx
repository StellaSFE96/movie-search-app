import React, { useState } from 'react';
import styled from 'styled-components';
import { Movie } from '../types/movieTypes';
import MovieCard from './MovieCard';

interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  const [visibleMovies, setVisibleMovies] = useState(10); // Initial number of movies to show

  const showMoreMovies = () => {
    setVisibleMovies((prevVisibleMovies) => prevVisibleMovies + 10); // Show more movies when button is clicked
  };

  return (
    <>
      <Container>
        {movies.slice(0, visibleMovies).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Container>
      {visibleMovies < movies.length && (
        <ShowMoreButton onClick={showMoreMovies}>Show More</ShowMoreButton>
      )}
    </>
  );
};

export default MovieList;

const Container = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 16px;
  margin-top: 50px;
`;

const ShowMoreButton = styled.button`
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;