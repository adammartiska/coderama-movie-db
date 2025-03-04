import MovieIcon from "@mui/icons-material/MovieCreation";
import { AppBar, Toolbar, Typography, useTheme } from "@mui/material";

const Header = () => {
  const theme = useTheme();

  return (
    <AppBar
      position="static"
      sx={{
        marginBottom: 2,
        background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.dark} 90%)`,
      }}
    >
      <Toolbar>
        <MovieIcon sx={{ mr: 2 }} />
        <Typography variant="h6" component="div">
          Movie Database
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
