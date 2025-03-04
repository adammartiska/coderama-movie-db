import { Box, CircularProgress } from "@mui/material";

const Spinner = () => (
  <Box sx={{ display: "flex", justifyContent: "center", padding: 4, mt: 4 }}>
    <CircularProgress />
  </Box>
);

export default Spinner;
