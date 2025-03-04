import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const getActiveRoute = () => {
    if (location.pathname.startsWith("/movie/")) return "/movie";
    return location.pathname;
  };

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={getActiveRoute()}
        onChange={(_, newValue) => {
          navigate(newValue);
        }}
      >
        <BottomNavigationAction
          label="Search"
          value="/"
          icon={<SearchIcon />}
        />
        <BottomNavigationAction
          label="Favorites"
          value="/favorites"
          icon={<FavoriteIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default Navigation;
