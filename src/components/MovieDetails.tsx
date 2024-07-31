import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

interface MovieDetailsProps {
  movieId: string;
}

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  runtime: number;
  genres: { id: number; name: string }[];
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movieId }) => {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}`, {
        params: { api_key: process.env.REACT_APP_TMDB_API_KEY },
      })
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.error('Error fetching movie details:', error);
      });
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'default-poster.jpg'; // Add default image URL

  return (
    <Container backgroundImage={imageUrl}>
      <Poster src={imageUrl} alt={movie.title} />
      <Details>
        <Title>{movie.title}</Title>
        <p>{movie.overview}</p>
        <p>Release Date: {movie.release_date || 'N/A'}</p>
        <p>Runtime: {movie.runtime} minutes</p>
        <p>
          Genres: {movie.genres.map((genre) => genre.name).join(', ')}
        </p>
      </Details>
    </Container>
  );
};

const Container = styled.div<{ backgroundImage: string }>`
  position: relative;
  width: 100%;
  padding: 50px 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  color: white;
  min-height: 100vh;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.backgroundImage});
    background-size: cover;
    background-position: center;
    filter: blur(10px);
    z-index: -2;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Dark overlay */
    z-index: -1;
  }
`;

const Details = styled.div`
  width: 50%;
  padding: 50px 10px;
  z-index: 1;
  text-align: left;
`;

const Poster = styled.img`
  width: 30%;
  z-index: 1;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const Title = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 2em;
  margin-bottom: 16px;
`;

export default MovieDetails;
