import { Box, Typography } from "@mui/material";

const NoMoviesFound = () => {
  return (
    <Box sx={{ textAlign: "center", my: 4 }}>
      <Typography variant="h6">No movies found</Typography>
      <Typography variant="body2" color="text.secondary">
        Try searching for something else
      </Typography>
    </Box>
  );
};

export default NoMoviesFound;
