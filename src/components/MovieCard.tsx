import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Movie } from '../types/movieTypes';

interface MovieCardProps {
  movie: Movie;
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  width: 20%;
  padding: 16px;
  margin: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  text-decoration: none; /* Prevent link styling */
  color: inherit; /* Inherit text color */
`;

const Poster = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 16px;
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

  // Fallback poster image if no poster is provided
  const defaultPoster = 'url-to-default-poster-image'; 
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
