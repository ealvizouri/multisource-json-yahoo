import styled from 'styled-components';

const ImagesContainer = styled.div`
  border: 1px solid var(--color-border);

  .gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    height: 55vh;
    overflow-y: scroll;
  }
`;

export default ImagesContainer;