import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../components/layout/layout";
import FavoritesPage from "./favourites-page";
import MovieDetailPage from "./movie-detail-page";
import SearchPage from "./search-page/search-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <SearchPage />,
      },
      {
        path: "favorites",
        element: <FavoritesPage />,
      },
      {
        path: "movie/:imdbID",
        element: <MovieDetailPage />,
      },
    ],
  },
]);

export const Routes = () => <RouterProvider router={router} />;
