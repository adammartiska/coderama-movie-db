import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

export type SearchBarProps = {
  initialQuery?: string;
  onSearch: (query: string) => void;
};

const SearchBar = ({ initialQuery = "", onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState(initialQuery);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        gap: 2,
        mb: 4,
        width: "100%",
      }}
    >
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search for movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        sx={{ flexGrow: 1 }}
      />
      <Button
        type="submit"
        variant="contained"
        startIcon={<SearchIcon />}
        disabled={!query.trim()}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
