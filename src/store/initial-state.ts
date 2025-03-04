import { loadFavorites } from "../utils/local-storage";

export const initialState = {
  favorites: loadFavorites(),
};
