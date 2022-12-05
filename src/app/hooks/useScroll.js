import { useEffect, useCallback } from "react";

const useScroll = (suspectRef, dispatch) => {
  const handleScroll = useCallback(() => {
    const { current } = suspectRef;
    if (current) {
      if (current.scrollTop !== (current.scrollHeight -current.offsetHeight)) return;
      console.log('Fetch items!');
      dispatch();
    }
  }, [dispatch]);

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