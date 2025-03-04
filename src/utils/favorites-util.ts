import { MovieDto } from "../types/movie.dto";

export const isFavorite = (id: string, favorites: MovieDto[] = []) =>
  favorites.some((fav) => fav.imdbID === id);
