import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Movie } from "../types/movieTypes";
import MovieCard from "./MovieCard";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  listType: "favorites" | "toWatch";
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
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 1000px;
  width: 60%;
  max-height: 85vh;
  overflow-y: auto;
  position: relative;
  z-index: 1001;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 30px;
  flex-wrap: wrap;
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

const Title = styled.h2`
  color: black;
`;
const Message = styled.p`
  color: black;
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

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };


  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <Title>
          {listType === "favorites" ? "Favorite Movies" : "Movies to Watch"}
        </Title>
        <Content>
          {movies.length > 0 ? (
            movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
          ) : (
            <Message>
              No {listType === "favorites" ? "favorite" : "to watch"} movies
              yet.
            </Message>
          )}
        </Content>
      </ModalContent>
    </Overlay>
  );
};

export default Modal;
