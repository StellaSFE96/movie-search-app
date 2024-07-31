import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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


const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <StyledLink to="/">
        <Title>Movie Catalogue</Title>
      </StyledLink>
    </HeaderContainer>
  );
};

export default Header;
