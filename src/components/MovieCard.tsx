import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Movie } from "../types/movieTypes";
import defaultPoster from "../assets/images/default-poster.jpg";
import Star from "../assets/icons/star.png";
import HeartRed from "../assets/icons/heart-red.png";
import HeartBlack from "../assets/icons/heart-black.png";
import Watch from "../assets/icons/eye.png";
import WatchFilled from "../assets/icons/eye-filled.png";

interface MovieCardProps {
  movie: Movie;
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  width: 250px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  color: inherit;
  margin-bottom: 20px;
  padding-bottom: 20px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

const Poster = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  aspect-ratio: 2 / 3;
  margin-bottom: 5px;
`;

const Title = styled.h3`
  font-size: 1.2em;
  color: #333;
  margin: 0;
`;

const Details = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;

  p {
    margin: 0;
  }
`;

const ReleaseYear = styled.p`
  font-size: 1em;
  color: #666;
  align-self: center;
`;

const StarIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 5px;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  font-size: 1em;
  color: #666;
`;

const FavoriteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-top: 9px;

  &:focus {
    outline: none;
  }

  img {
    width: 20px;
  }
`;

const WatchButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-top: 10px;

  &:focus {
    outline: none;
  }

  img {
    width: 20px;
  }
`;

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isToWatch, setIsToWatch] = useState(false);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    const favorites: Movie[] = storedFavorites
      ? JSON.parse(storedFavorites)
      : [];
    setIsFavorite(favorites.some((fav) => fav.id === movie.id));

    const storedToWatch = localStorage.getItem("toWatch");
    const toWatch: Movie[] = storedToWatch ? JSON.parse(storedToWatch) : [];
    setIsToWatch(toWatch.some((watch) => watch.id === movie.id));
  }, [movie.id]);

  const handleFavoriteClick = () => {
    const storedFavorites = localStorage.getItem("favorites");
    let favorites: Movie[] = storedFavorites ? JSON.parse(storedFavorites) : [];

    if (isFavorite) {
      favorites = favorites.filter((fav) => fav.id !== movie.id);
    } else {
      favorites.push(movie);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  const handleToWatchClick = () => {
    const storedToWatch = localStorage.getItem("toWatch");
    let toWatch: Movie[] = storedToWatch ? JSON.parse(storedToWatch) : [];

    if (isToWatch) {
      toWatch = toWatch.filter((watch) => watch.id !== movie.id);
    } else {
      toWatch.push(movie);
    }

    localStorage.setItem("toWatch", JSON.stringify(toWatch));
    setIsToWatch(!isToWatch);
  };

  const movieDetailsUrl = `/movie/${movie.id}`;
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : defaultPoster;

  const releaseYear = movie.release_date
    ? movie.release_date.split("-")[0]
    : "N/A";
  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : "N/A";

  return (
    <Card>
      <Link
        to={movieDetailsUrl}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Poster src={posterUrl} alt={movie.title} />
        <Title>{movie.title}</Title>
      </Link>
      <Details>
        <ReleaseYear>{releaseYear}</ReleaseYear>
        <Rating>
          <StarIcon src={Star} alt="star icon" />
          {rating}
        </Rating>
        <FavoriteButton onClick={handleFavoriteClick}>
          <img src={isFavorite ? HeartRed : HeartBlack} alt="favorite icon" />
        </FavoriteButton>
        <WatchButton onClick={handleToWatchClick}>
          <img src={isToWatch ? WatchFilled : Watch} alt="to watch icon" />
        </WatchButton>
      </Details>
    </Card>
  );
};

export default MovieCard;