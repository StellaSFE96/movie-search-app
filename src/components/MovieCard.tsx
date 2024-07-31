import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Movie } from '../types/movieTypes';
import defaultPoster from '../assets/images/default-poster.jpg';

interface MovieCardProps {
  movie: Movie;
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  width: 250px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  text-decoration: none; 
  color: inherit;
  margin-bottom: 20px;
  padding-bottom: 20px;
`;

const Poster = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  aspect-ratio: 2 / 3; /* Consistent aspect ratio */
  margin-bottom: 10px;
`;

const Title = styled.h3`
  font-size: 1.2em;
  color: #333;
`;

const Detail = styled.p`
  font-size: 0.9em;
  color: #666;
  margin-top: 0;
`;

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const movieDetailsUrl = `/movie/${movie.id}`;
  const posterUrl = movie.poster_path 
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
    : defaultPoster;

  return (
    <Link to={movieDetailsUrl} style={{ textDecoration: 'none' }}>
      <Card>
        <Poster src={posterUrl} alt={movie.title} />
        <Title>{movie.title}</Title>
        <Detail>Release Date: {movie.release_date || "N/A"}</Detail>
        <Detail>Rating: {movie.vote_average || "N/A"}</Detail>
      </Card>
    </Link>
  );
};

export default MovieCard;

