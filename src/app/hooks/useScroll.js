import { useEffect, useCallback } from "react";

const useScroll = (suspectRef, dispatch, isLoading) => {
  const handleScroll = useCallback(() => {
    if (!isLoading) {
      const { current } = suspectRef;
      if (current) {
        if (current.scrollTop !== (current.scrollHeight - current.offsetHeight)) return;
        dispatch();
      }
    }
  }, [dispatch, isLoading, suspectRef]);

  useEffect(() => {
    const { current } = suspectRef;
    if (current) {
      current.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (current) {
        current.removeEventListener('scroll', handleScroll);
      }
    }
  }, [handleScroll, suspectRef]);
}

export default useScroll;