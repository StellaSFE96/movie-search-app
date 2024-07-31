import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Movie } from '../types/movieTypes';
import defaultPoster from '../assets/images/default-poster.jpg';
import Star from '../assets/icons/star.png';

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
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

const Poster = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  aspect-ratio: 2 / 3;
  margin-bottom: 10px;
`;

const Title = styled.h3`
  font-size: 1.2em;
  color: #333;
`;

const Details = styled.div`
  display: flex;
  justify-content: column;
  gap: 20px;

  p{
  margin: 0;
  }
`;

const ReleaseYear = styled.p`
  font-size: 1em;
  color: #666;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  font-size: 1em;
  color: #666;
`;

const StarIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 5px;
`;

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const movieDetailsUrl = `/movie/${movie.id}`;
  const posterUrl = movie.poster_path 
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
    : defaultPoster;

  const releaseYear = movie.release_date ? movie.release_date.split('-')[0] : 'N/A';
  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A';

  return (
    <Link to={movieDetailsUrl} style={{ textDecoration: 'none' }}>
      <Card>
        <Poster src={posterUrl} alt={movie.title} />
        <Title>{movie.title}</Title>
        <Details>
          <ReleaseYear>Release Year: {releaseYear}</ReleaseYear>
          <Rating>
          <StarIcon src={Star} alt="star icon" />
          {rating}
        </Rating>
        </Details>
      </Card>
    </Link>
  );
};

export default MovieCard;
