import React from 'react';
import { useParams } from 'react-router-dom';
import MovieDetails from '../components/MovieDetails';
import styled from 'styled-components';

const MoviePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    // Handle the case where ID is not present or redirect to another page
    return <div>Error: Movie ID not found.</div>;
  }

  return (
    <Container>
      <MovieDetails movieId={id} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`

export default MoviePage;
