// src/components/Header.tsx
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  width: 90vw;
  height: 100px;
  margin: 0 auto;
  padding: 16px;
  background-color: #007bff;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.5em;
  font-family: "Playfair Display", serif;
`;

const Nav = styled.nav`
  display: flex;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Title>Movie Catalogue</Title>
      <Nav>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;