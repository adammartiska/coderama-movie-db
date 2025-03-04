import { isFavorite } from "../utils/favorites-util";
import { saveFavorites } from "../utils/local-storage";
import { ACTIONS } from "./actions";

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_FAVORITE:
      const isSelectedMovieFavorite = isFavorite(
        action.payload.imdbID,
        state.favorites
      );
      let currentFavorites = [...state.favorites];
      if (isSelectedMovieFavorite) {
        currentFavorites = currentFavorites?.filter(
          (movie: any) => movie.imdbID !== action.payload.imdbID
        );
      } else {
        currentFavorites = [...state.favorites, action.payload];
      }
      saveFavorites(currentFavorites);
      return {
        ...state,
        favorites: currentFavorites,
      };

    default:
      return state;
  }
};
