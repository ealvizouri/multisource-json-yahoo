import styled from 'styled-components';

const SearchBarContainer = styled.div`
  position: relative;
  z-index: 1000;
  input[type=text] {
    display: block;
    margin: 0;
    padding: 0.4rem 1.6rem;;
    color: var(--color-text);
    width: 100%;
    font-family: inherit;
    font-size: 1.5rem;
    font-weight: inherit;
    line-height: 1.5;
    border: 1px solid var(--color-border);
    border-radius: 0.2rem;
    /* transition: box-shadow 300ms; */
    
    &::placeholder {
      color: #B0BEC5;
    }
    
    &:focus {
      outline: none;
      box-shadow: 0.1rem 0.1rem 0.3rem 0.5px #ededed;
    }
  }
`;

export default SearchBarContainer;