import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider } from "@mui/material";
import { QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { Routes } from "./pages/routes";
import { StoreProvider } from "./store/store-provider";
import { queryClient } from "./utils/query-client";
import { theme } from "./utils/theme";

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <StoreProvider>
            <Routes />
          </StoreProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
