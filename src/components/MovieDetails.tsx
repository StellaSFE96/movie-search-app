import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface MovieDetailsProps {}

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  runtime: number;
  genres: { id: number; name: string }[];
}

const MovieDetails: React.FC<MovieDetailsProps> = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}`, {
        params: { api_key: process.env.REACT_APP_TMDB_API_KEY },
      })
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.error('Error fetching movie details:', error);
      });
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'default-poster.jpg'; // Add a default image URL

  return (
    <div className="movie-details">
      <img src={imageUrl} alt={movie.title} />
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Runtime: {movie.runtime} minutes</p>
      <p>
        Genres: {movie.genres.map((genre) => genre.name).join(', ')}
      </p>
      {/* Add more details as needed */}
    </div>
  );
};

export default MovieDetails;
