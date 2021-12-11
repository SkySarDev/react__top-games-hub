import { useEffect } from "react";

export default function useInfiniteScroll(anchorRef, callback) {
  useEffect(() => {
    let observerValue = null;
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback();
      }
    }, options);

    observerValue = anchorRef.current;
    observer.observe(observerValue);

    return () => {
      if (observerValue) {
        observer.unobserve(observerValue);
      }
    };
  }, [anchorRef, callback]);
}
