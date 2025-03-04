import { useCallback, useRef } from "react";

interface UseInfiniteScrollProps {
  loadMore: () => void;
  hasMore: boolean;
  isLoading: boolean;
  rootMargin?: string;
}

export const useInfiniteScroll = ({
  loadMore,
  hasMore,
  isLoading,
  rootMargin = "20px",
}: UseInfiniteScrollProps) => {
  const observer = useRef<IntersectionObserver | null>(null);

  const loadMoreRef = useCallback(
    (node: Element | null) => {
      if (isLoading) return;

      if (observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMore && !isLoading) {
            loadMore();
          }
        },
        { rootMargin }
      );

      if (node) {
        observer.current.observe(node);
      }
    },
    [loadMore, hasMore, isLoading, rootMargin]
  );

  return loadMoreRef;
};
