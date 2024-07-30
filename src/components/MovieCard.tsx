import React from 'react';
import { Link } from 'react-router-dom';

interface MovieCardProps {
  movie: {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
  };
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const { id, title, overview, poster_path } = movie;
  const imageUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : 'default-poster.jpg'; // Add a default image URL

  return (
    <div className="movie-card">
      <Link to={`/movie/${id}`}>
        <img src={imageUrl} alt={title} />
        <h3>{title}</h3>
        <p>{overview.substring(0, 100)}...</p>
      </Link>
    </div>
  );
};

export default MovieCard;
