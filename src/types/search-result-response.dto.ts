import { MovieDto } from "./movie.dto";

export type SearchResultResponseDto = {
  Response: string;
  Search: MovieDto[];
  totalResults: string;
};
