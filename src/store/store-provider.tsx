import { createContext, useContext, useReducer } from "react";
import { MovieDto } from "../types/movie.dto";
import { ACTIONS } from "./actions";
import { initialState } from "./initial-state";
import { reducer } from "./reducer";

export type StoreActions = {
  toggleFavorite: (movie: MovieDto) => void;
};

export type StoreState = {
  favorites: MovieDto[];
};

export type StoreContextType = {
  state: StoreState;
  actions: StoreActions;
};

const StoreContext = createContext<StoreContextType>({
  state: initialState,
  actions: {} as StoreActions,
});

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
};

export type StoreProviderProps = {
  children: React.ReactNode;
};

export const StoreProvider = ({ children }: StoreProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const actions = {
    toggleFavorite: (movie: MovieDto) => {
      dispatch({ type: ACTIONS.TOGGLE_FAVORITE, payload: movie });
    },
  };

  return (
    <StoreContext.Provider value={{ state, actions }}>
      {children}
    </StoreContext.Provider>
  );
};
