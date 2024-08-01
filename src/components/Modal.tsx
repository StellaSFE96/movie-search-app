import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Movie } from '../types/movieTypes';
import MovieCard from './MovieCard';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  listType: 'favorites' | 'toWatch';
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5em;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, listType }) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    if (isOpen) {
      const storedMovies = localStorage.getItem(listType);
      const movies: Movie[] = storedMovies ? JSON.parse(storedMovies) : [];
      setMovies(movies);
    }
  }, [isOpen, listType]);

  if (!isOpen) {
    return null;
  }

  return (
    <Overlay>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2>{listType === 'favorites' ? 'Favorite Movies' : 'To Watch Movies'}</h2>
        {movies.length > 0 ? (
          movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <p>No {listType === 'favorites' ? 'favorite' : 'to watch'} movies yet.</p>
        )}
      </ModalContent>
    </Overlay>
  );
};

export default Modal;
