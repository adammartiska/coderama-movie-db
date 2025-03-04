import { useLayoutEffect } from "react";
import {
  getScrollPositionFromLocalStorage,
  saveScrollPositionToLocalStorage,
} from "../utils/local-storage";

export default function useWindowScrollPosition(setCondition: boolean): void {
  useLayoutEffect(() => {
    const scrollPosition = getScrollPositionFromLocalStorage();
    if (setCondition && scrollPosition) {
      window.scrollTo(0, scrollPosition);
    }
  }, [setCondition]);

  useLayoutEffect(() => {
    const savePosition = () => {
      saveScrollPositionToLocalStorage(window.scrollY);
    };
    window.addEventListener("scrollend", savePosition);
    return () => {
      window.removeEventListener("scrollend", savePosition);
    };
  }, []);
}
