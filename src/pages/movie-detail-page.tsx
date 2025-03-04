import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Alert, Box, Button } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getMovieDetails } from "../api/omdb-api";
import MovieDetail from "../components/movie-detail";
import Spinner from "../components/spinner";
import { useStore } from "../store/store-provider";
import { MOVIE_DETAIL_QUERY_KEY } from "../utils/constants";
import { isFavorite } from "../utils/favorites-util";

const MovieDetailPage = () => {
  const {
    state: { favorites },
    actions: { toggleFavorite },
  } = useStore();

  const { imdbID } = useParams();
  const navigate = useNavigate();

  const {
    data: movieDetail,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: [MOVIE_DETAIL_QUERY_KEY, imdbID],
    queryFn: () => getMovieDetails(imdbID),
    enabled: !!imdbID,
  });

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Box>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={handleGoBack}
        sx={{ mb: 2, display: "flex" }}
      >
        Back
      </Button>

      {isLoading && <Spinner />}

      {isError && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error?.message}
        </Alert>
      )}

      {!!movieDetail && (
        <MovieDetail
          movie={movieDetail}
          isFavorite={isFavorite(movieDetail.imdbID, favorites)}
          onToggleFavorite={toggleFavorite}
        />
      )}
    </Box>
  );
};

export default MovieDetailPage;
