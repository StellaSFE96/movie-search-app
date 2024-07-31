import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  height: 80px;
  margin: 0;
  padding: 16px 110px;
  background-color: #17153B;
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

const Nav = styled.nav`
    width: 100px;
    display: flex;
    border: white solid 2px;
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    transition: all 0.3s ease-in-out;
    border-radius: 20px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <StyledLink to="/">
        <Title>Movie Catalogue</Title>
      </StyledLink>
      <Nav>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
