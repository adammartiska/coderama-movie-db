import styled from "@emotion/styled";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const StyledCard = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }
`;

const StyledCardMedia = styled(CardMedia)`
  height: 0;
  padding-top: 150%; // 2:3 aspect ratio for posters
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export type Movie = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

export type MovieCardProps = {
  movie: Movie;
  isFavorite: boolean;
  onToggleFavorite: (movie: Movie) => void;
  showRemoveButton?: boolean;
};

const MovieCard = ({
  movie,
  isFavorite,
  onToggleFavorite,
  showRemoveButton = false,
}: MovieCardProps) => {
  const posterUrl =
    movie.Poster && movie.Poster !== "N/A"
      ? movie.Poster
      : "https://via.placeholder.com/300x450?text=No+Poster";

  return (
    <StyledCard elevation={3}>
      <StyledLink to={`/movie/${movie.imdbID}`}>
        <StyledCardMedia image={posterUrl} title={movie.Title} />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h6" component="div" noWrap>
            {movie.Title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {movie.Year}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {movie.Type}
          </Typography>
        </CardContent>
      </StyledLink>
      <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
        {showRemoveButton ? (
          <IconButton
            onClick={() => onToggleFavorite(movie)}
            color="error"
            aria-label="remove from favorites"
          >
            <DeleteIcon />
          </IconButton>
        ) : (
          <IconButton
            onClick={() => onToggleFavorite(movie)}
            color="primary"
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
        )}
      </Box>
    </StyledCard>
  );
};

export default MovieCard;
