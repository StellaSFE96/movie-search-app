// MovieCard.tsx
import React from 'react';
import styled from 'styled-components';
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
  return (
    <Card>
      <Poster src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <Title>{movie.title}</Title>
      <Overview>{movie.overview}</Overview>
    </Card>
  );
};

export default MovieCard;


// import React from 'react';
// import { Link } from 'react-router-dom';

// interface MovieCardProps {
//   movie: {
//     id: number;
//     title: string;
//     overview: string;
//     poster_path: string;
//   };
// }

// const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
//   const { id, title, overview, poster_path } = movie;
//   const imageUrl = poster_path
//     ? `https://image.tmdb.org/t/p/w500${poster_path}`
//     : 'default-poster.jpg'; // Add a default image URL

//   return (
//     <div className="movie-card">
//       <Link to={`/movie/${id}`}>
//         <img src={imageUrl} alt={title} />
//         <h3>{title}</h3>
//         <p>{overview.substring(0, 100)}...</p>
//       </Link>
//     </div>
//   );
// };

// export default MovieCard;
