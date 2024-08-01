import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import styled from "styled-components";
import defaultPoster from "../assets/images/default-poster.jpg";
import backArrow from "../assets/icons/arrow-back.svg";
import Star from '../assets/icons/star.png';

interface MovieDetailsProps {
  movieId: string;
}

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  runtime: number;
  genres: { id: number; name: string }[];
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movieId }) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [isToWatch, setIsToWatch] = useState(false);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}`, {
        params: { api_key: process.env.REACT_APP_TMDB_API_KEY },
      })
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      });
  }, [movieId]);

  const handleToWatchClick = () => {
    const storedToWatch = localStorage.getItem('toWatch');
    let toWatch: Movie[] = storedToWatch ? JSON.parse(storedToWatch) : [];

    if (isToWatch) {
      toWatch = toWatch.filter(watch => watch.id !== movie?.id);
    } else {
      if (movie) {
        toWatch.push(movie);
      }
    }

    localStorage.setItem('toWatch', JSON.stringify(toWatch));
    setIsToWatch(!isToWatch);
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  const releaseYear = movie.release_date ? movie.release_date.split('-')[0] : 'N/A';
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : defaultPoster;

  const runTime = movie.runtime 
    ? `${movie.runtime} minutes` 
    : 'N/A';

  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A';


  return (
    <Container $backgroundImage={imageUrl}>
      <Poster src={imageUrl} alt={movie.title} />
      <Section>
        <Title>{movie.title}</Title>
        <Details>
          <p>{releaseYear}</p>
          <p>{runTime}</p>
          <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
          <p><StarIcon src={Star} alt="star icon" />{rating}</p>
        </Details>
        <p>{movie.overview}</p>
        <Nav>
          <StyledLink to="/">
            <BackIcon src={backArrow} alt="Back" />
            Return
          </StyledLink>
          <WatchButton onClick={handleToWatchClick}>
            {isToWatch ? 'Remove from Watch List' : 'Add to Watch List'}
          </WatchButton>
        </Nav>
      </Section>
    </Container>
  );
};

const Container = styled.div<{ $backgroundImage: string }>`
  position: relative;
  width: 100%;
  padding: 50px 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 50px;
  align-items: center;
  color: white;
  min-height: 100vh;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.$backgroundImage});
    background-size: cover;
    background-position: center;
    filter: blur(10px);
    z-index: -2;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Dark overlay */
    z-index: -1;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  p {
    margin: 0;
  }
`;

const Section = styled.div`
  width: 40%;
  padding: 50px 10px;
  z-index: 1;
  text-align: left;
`;

const Poster = styled.img`
  width: 30%;
  z-index: 1;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const Title = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 2em;
  margin-bottom: 16px;
`;

const Nav = styled.nav`
  max-width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  gap: 10px;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 8px 20px;

  text-decoration: none;
  color: white;
  border: white solid 2px;
  transition: all 0.3s ease-in-out;
  border-radius: 20px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const BackIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 5px;
  padding-top: 4px;
`;

const WatchButton = styled.button`
  background-color: #ff5722;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1em;

  &:hover {
    background-color: #e64a19;
  }
`;

const StarIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 5px;
`;

export default MovieDetails;
