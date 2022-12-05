import { useEffect, useCallback } from "react";

const useScroll = (suspectRef, dispatch, isLoading) => {
  const handleScroll = useCallback(() => {
    if (!isLoading) {
      const { current } = suspectRef;
      if (current) {
        if (current.scrollTop !== (current.scrollHeight -current.offsetHeight)) return;
        console.log('Fetch items!');
        dispatch();
      }
    }
  }, [dispatch, isLoading]);

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
  }, [handleScroll]);
}

export default useScroll;