import { DebounceInput } from 'react-debounce-input';
import { useSelector, useDispatch } from 'react-redux';
import { selectSearchText, setSearch } from '../../app/store/searchSlice';
import SearchBarContainer from "./SearchBarContainer";
import SearchBarResults from './SearchBarResults';


const SearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useSelector(selectSearchText)
  return (
    <SearchBarContainer>
      <DebounceInput
        minLength={2}
        debounceTimeout={300}
        onChange={({ target }) => dispatch(setSearch(target.value))}
        type="text"
        placeholder="SEARCH SOMETHING..."
      />
      <SearchBarResults />
    </SearchBarContainer>
  )
}

export default SearchBar;