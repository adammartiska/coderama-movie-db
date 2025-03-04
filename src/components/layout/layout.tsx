import { Box, Container } from "@mui/material";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./header";
import Navigation from "./navigation";

const Layout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Container
        component="main"
        sx={{
          flex: 1,
          pb: 7,
          pt: 2,
        }}
      >
        <Outlet />
      </Container>
      <Navigation />
      <ScrollRestoration />
    </Box>
  );
};

export default Layout;
