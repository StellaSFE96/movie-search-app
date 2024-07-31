import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Movie } from '../types/movieTypes';
import defaultPoster from '../assets/images/default-poster.jpg'

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
`;

const Poster = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  aspect-ratio: 2 / 3; /* Example aspect ratio */
`;

const Title = styled.h3`
  font-size: 1.2em;
  margin: 0;
  color: #333;
`;

const Overview = styled.p`
  font-size: 0.9em;
  color: #666;
`;

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  // Define the URL to the movie details page, using the movie ID
  const movieDetailsUrl = `/movie/${movie.id}`;

  // Replace with default poster URL
  const posterUrl = movie.poster_path 
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
    : defaultPoster;

  return (
    <Link to={movieDetailsUrl} style={{ textDecoration: 'none' }}>
      <Card>
        <Poster src={posterUrl} alt={movie.title} />
        <Title>{movie.title}</Title>
        <Overview>{movie.overview}</Overview>
      </Card>
    </Link>
  );
};

export default MovieCard;