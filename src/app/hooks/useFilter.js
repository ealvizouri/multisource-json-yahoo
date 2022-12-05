import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectSearchText } from "../store/searchSlice";

const useFilter = (results) => {
  const [res, setRes] = useState(results);
  const searchText = useSelector(selectSearchText);

  useEffect(() => {
    if (searchText) {
      const newRes = results.filter(item => {
        if (item.matching_terms) {
          return item.matching_terms.filter(term => {
            const starts = new RegExp(`^${searchText}`, 'i');
            const ends = new RegExp(`${searchText}$`, 'i');
            const contains = new RegExp(`${searchText}`, 'i');
            return starts.test(term) || ends.test(term) || contains.test(term)
          }).length > 0;
        }
        return false;
      });
      setRes(newRes);
    } else {
      setRes(results);
    }
  }, [searchText, results]);
  return res;
}

export default useFilter;