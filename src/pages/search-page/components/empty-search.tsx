import { Box, Typography } from "@mui/material";

const EmptySearch = () => {
  return (
    <Box sx={{ textAlign: "center", my: 4 }}>
      <Typography variant="h6">Search for movies</Typography>
      <Typography variant="body2" color="text.secondary">
        Enter a movie title in the search box above
      </Typography>
    </Box>
  );
};

export default EmptySearch;
