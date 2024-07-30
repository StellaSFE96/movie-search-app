// Interface for a single movie
export interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
    vote_count: number;
  }

  export interface MovieListProps {
    movies: Movie[];
  }
  
  // Interface for the response when searching for movies
  export interface MoviesResponse {
    page: number;
    results: Movie[];
    total_results: number;
    total_pages: number;
  }
  
  // Interface for detailed information about a single movie
  export interface MovieDetails extends Movie {
    genres: { id: number; name: string }[];
    runtime: number;
    status: string;
    tagline: string;
  }

  export {};

  