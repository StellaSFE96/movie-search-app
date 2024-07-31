import React from 'react';
import { useParams } from 'react-router-dom';
import MovieDetails from '../components/MovieDetails';

const MoviePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    // Handle the case where ID is not present or redirect to another page
    return <div>Error: Movie ID not found.</div>;
  }

  return (
    <div>
      <MovieDetails movieId={id} />
    </div>
  );
};

export default MoviePage;
