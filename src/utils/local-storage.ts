export const loadFavorites = () => {
  try {
    const favorites = localStorage.getItem("favorites");
    return favorites ? JSON.parse(favorites) : [];
  } catch (error) {
    console.error("Error loading favorites from localStorage:", error);
    return [];
  }
};

export const saveFavorites = (favorites: any) => {
  try {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  } catch (error) {
    console.error("Error saving favorites to localStorage:", error);
  }
};

export const saveSearchState = (searchTerm: string) => {
  try {
    localStorage.setItem("searchTerm", JSON.stringify(searchTerm));
  } catch (error) {
    console.error("Error saving search state to localStorage:", error);
  }
};

export const loadSearchState = () => {
  try {
    const searchState = localStorage.getItem("searchTerm");
    return searchState ? JSON.parse(searchState) : null;
  } catch (error) {
    console.error("Error loading search state from localStorage:", error);
    return null;
  }
};

export const saveScrollPositionToLocalStorage = (position: number) => {
  localStorage.setItem("scroll-position", position.toString());
};

export const getScrollPositionFromLocalStorage = (): number | null => {
  const positionString = localStorage.getItem("scroll-position");
  if (positionString) {
    return parseInt(positionString, 10);
  }
  return null;
};
