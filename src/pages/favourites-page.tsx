import { Box, Grid } from "@mui/material";
import MovieCard from "../components/movie-card";
import { useStore } from "../store/store-provider";
import { MovieDto } from "../types/movie.dto";
import { isFavorite } from "../utils/favorites-util";

const FavoritesPage = () => {
  const {
    state: { favorites },
    actions: { toggleFavorite },
  } = useStore();

  return (
    <Box>
      <Grid container spacing={3}>
        {favorites.map((movie: MovieDto) => (
          <Grid item xs={6} sm={4} md={3} key={movie.imdbID}>
            <MovieCard
              movie={movie}
              isFavorite={isFavorite(movie.imdbID, favorites)}
              onToggleFavorite={toggleFavorite}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FavoritesPage;
