import styled from 'styled-components';

const SearchBarResultsContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  transform: translateY(100%);
  z-index: 1000;
  background-color: white;
  width: 100%;
  display: ${({ open }) => open ? 'flex' : 'none'};
  flex-direction: column;
  
  .result-item {
    color: var(--color-text);
    padding-left: 1rem;
    width: 100%;
    height: 2rem;
    display: flex;
    align-items: center;
  }
`;

export default SearchBarResultsContainer;