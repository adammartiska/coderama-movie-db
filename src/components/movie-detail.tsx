import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Grid,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";

export type MovieDetailProps = {
  movie: any;
  isFavorite: boolean;
  onToggleFavorite: (movie: any) => void;
};

const MovieDetail = ({
  movie,
  isFavorite,
  onToggleFavorite,
}: MovieDetailProps) => {
  if (!movie) return null;

  const posterUrl =
    movie.Poster && movie.Poster !== "N/A"
      ? movie.Poster
      : "https://via.placeholder.com/300x450?text=No+Poster";

  const rating = movie.imdbRating ? parseFloat(movie.imdbRating) / 2 : 0;

  return (
    <Card elevation={3}>
      <Grid container>
        <Grid item xs={12} md={4}>
          <CardMedia
            component="img"
            image={posterUrl}
            alt={movie.Title}
            sx={{ height: "100%", objectFit: "cover" }}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <CardContent>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Typography variant="h4" component="h1" sx={{ flexGrow: 1 }}>
                {movie.Title}
              </Typography>
              <IconButton
                onClick={() => onToggleFavorite(movie)}
                color="primary"
                size="large"
                aria-label={
                  isFavorite ? "remove from favorites" : "add to favorites"
                }
              >
                {isFavorite ? (
                  <FavoriteIcon color="error" />
                ) : (
                  <FavoriteBorderIcon />
                )}
              </IconButton>
            </Box>

            <Typography variant="h6" color="text.secondary" gutterBottom>
              {movie.Year} • {movie.Rated} • {movie.Runtime}
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
              <Rating value={rating} precision={0.1} readOnly />
              <Typography variant="body2" sx={{ ml: 1 }}>
                {movie.imdbRating}/10 ({movie.imdbVotes} votes)
              </Typography>
            </Box>

            <Box sx={{ my: 2 }}>
              {movie.Genre?.split(",").map((genre: any, index: any) => (
                <Chip
                  key={index}
                  label={genre.trim()}
                  variant="outlined"
                  sx={{ m: 1 }}
                />
              ))}
            </Box>

            <Divider sx={{ my: 2 }} />

            <Typography variant="body1" paragraph>
              {movie.Plot}
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" fontWeight="bold">
                  Director
                </Typography>
                <Typography variant="body2" paragraph>
                  {movie.Director}
                </Typography>

                <Typography variant="subtitle1" fontWeight="bold">
                  Writer
                </Typography>
                <Typography variant="body2" paragraph>
                  {movie.Writer}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" fontWeight="bold">
                  Actors
                </Typography>
                <Typography variant="body2" paragraph>
                  {movie.Actors}
                </Typography>

                <Typography variant="subtitle1" fontWeight="bold">
                  Language
                </Typography>
                <Typography variant="body2">{movie.Language}</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default MovieDetail;
