import React, { useState } from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import FeaturedMovies from '../components/FeaturedMovies';
import PopularMovies from '../components/PopularMovies';
import UpcomingMovies from '../components/UpcomingMovies';
import { Movie } from '../types/movieTypes';
import { fetchMovies } from '../API/api';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomePage: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (query: string) => {
    if (query.trim()) {
      setHasSearched(true);
      try {
        const response = await fetchMovies(query);
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    } else {
      setHasSearched(false);
      setMovies([]); // Clear results if the query is empty
    }
  };

  return (
    <Container>
      <SearchBar onSearch={handleSearch} />
      {hasSearched && movies.length > 0 ? (
        <MovieList movies={movies} />
      ) : (
        <>
          <FeaturedMovies />
          <PopularMovies />
          <UpcomingMovies />
        </>
      )}
    </Container>
  );
};

export default HomePage;


// import React, { useState } from 'react';
// import styled from 'styled-components';
// import SearchBar from '../components/SearchBar';
// import MovieList from '../components/MovieList';
// import { Movie } from '../types/movieTypes';
// import { fetchMovies } from '../API/api';

// const Container = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const HomePage: React.FC = () => {
//   const [movies, setMovies] = useState<Movie[]>([]);

//   const handleSearch = async (query: string) => {
//     try {
//       const response = await fetchMovies(query);
//       setMovies(response.data.results);
//     } catch (error) {
//       console.error('Error fetching movies:', error);
//     }
//   };

//   return (
//     <Container>
//       <SearchBar onSearch={handleSearch} />
//       <MovieList movies={movies} />
//     </Container>
//   );
// };

// export default HomePage;