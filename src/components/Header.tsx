import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Modal from './Modal';

const HeaderContainer = styled.header`
  height: 80px;
  margin: 0;
  padding: 16px 110px;
  background-color: #151515;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit; /* Inherit color from the parent component */
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.8em;
  font-family: "Playfair Display", serif;
  color: white; 
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const ModalButton = styled.button`
  background-color: #ff5722;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1em;

  &:hover {
    background-color: #e64a19;
  }
`;


const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [listType, setListType] = useState<'favorites' | 'toWatch'>('favorites');

  const handleOpenModal = (type: 'favorites' | 'toWatch') => {
    setListType(type);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <HeaderContainer>
      <StyledLink to="/">
        <Title>Movie Catalogue</Title>
      </StyledLink>
      <ButtonContainer>
        <ModalButton onClick={() => handleOpenModal('favorites')}>Favorites</ModalButton>
        <ModalButton onClick={() => handleOpenModal('toWatch')}>To Watch</ModalButton>
      </ButtonContainer>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} listType={listType} />
    </HeaderContainer>
  );
};

export default Header;
