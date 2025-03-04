import { Alert, Box, Grid, Typography } from "@mui/material";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useCallback, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../../api/omdb-api";
import MovieCard from "../../components/movie-card";
import SearchBar from "../../components/search-bar";
import Spinner from "../../components/spinner";
import { useInfiniteScroll } from "../../hooks/use-infinite-scroll";
import useWindowScrollPosition from "../../hooks/use-scroll-position";
import { useStore } from "../../store/store-provider";
import { MovieDto } from "../../types/movie.dto";
import { MOVIES_QUERY_KEY } from "../../utils/constants";
import { loadSearchState, saveSearchState } from "../../utils/local-storage";
import EmptySearch from "./components/empty-search";
import NoMoviesFound from "./components/no-movies-found";

const SearchPage = () => {
  const lastSearch = loadSearchState();
  const [searchParams, setSearchParams] = useSearchParams({
    q: lastSearch ?? "",
  });
  const searchQuery = searchParams.get("q") || "";
  const {
    state: { favorites },
    actions: { toggleFavorite },
  } = useStore();

  const {
    data: { pages = [] } = {},
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
  } = useInfiniteQuery({
    queryKey: [MOVIES_QUERY_KEY, searchQuery],
    queryFn: ({ pageParam = 1 }) => searchMovies(searchQuery, pageParam),
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.Response === "False" || lastPage.Search.length < 10) {
        return undefined;
      }
      return pages.length + 1;
    },
    initialPageParam: 1,
    retry: false,
  });

  const loadMoreDetectorRef = useInfiniteScroll({
    loadMore: fetchNextPage,
    hasMore: hasNextPage,
    isLoading: isLoading || isFetchingNextPage,
  });

  useWindowScrollPosition(!isLoading);

  const movies = useMemo(() => {
    return pages.reduce((acc, page) => {
      return [...acc, ...page.Search];
    }, [] as MovieDto[]);
  }, [pages]);

  const totalResults = useMemo(() => pages?.[0]?.totalResults, [pages]);

  const handleSearch = useCallback(
    (query: string) => {
      setSearchParams((params) => {
        params.set("q", query);
        return params;
      });
      saveSearchState(query);
    },

    [setSearchParams]
  );

  return (
    <Box>
      <SearchBar initialQuery={searchQuery} onSearch={handleSearch} />
      {isError && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error?.message}
        </Alert>
      )}

      {movies.length > 0 && (
        <Box sx={{ my: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Found {totalResults} results for "{searchQuery}"
          </Typography>
        </Box>
      )}

      <Grid container spacing={3}>
        {movies.map((movie: any) => (
          <Grid item xs={6} sm={4} md={3} key={movie.imdbID}>
            <MovieCard
              movie={movie}
              isFavorite={favorites.some(
                (fav: any) => fav.imdbID === movie.imdbID
              )}
              onToggleFavorite={toggleFavorite}
            />
          </Grid>
        ))}
      </Grid>

      {(isLoading || isFetchingNextPage) && <Spinner />}
      {!isLoading && hasNextPage && (
        <Box ref={loadMoreDetectorRef} sx={{ height: 20, my: 4 }} />
      )}
      {!isLoading && movies?.length === 0 && searchQuery && <NoMoviesFound />}
      {!isLoading && !searchQuery && <EmptySearch />}
    </Box>
  );
};

export default SearchPage;
