import { MovieDto } from "../types/movie.dto";
import { SearchResultResponseDto } from "../types/search-result-response.dto";
import { BASE_URL, OMDB_API_KEY } from "../utils/constants";

export const searchMovies = async (
  query: string,
  page = 1
): Promise<SearchResultResponseDto> => {
  try {
    const response = await fetch(
      `${BASE_URL}?apikey=${OMDB_API_KEY}&s=${query}&page=${page}`
    );
    const data = await response.json();

    if (data.Response === "False") {
      throw new Error(data.Error || "Failed to fetch movies");
    }

    return data;
  } catch (error) {
    console.error("Error searching movies:", error);
    throw error;
  }
};

export const getMovieDetails = async (imdbID?: string): Promise<MovieDto> => {
  try {
    const response = await fetch(
      `${BASE_URL}?apikey=${OMDB_API_KEY}&i=${imdbID}`
    );
    const data = await response.json();

    if (data.Response === "False") {
      throw new Error(data.Error || "Failed to fetch movie details");
    }

    return data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};
