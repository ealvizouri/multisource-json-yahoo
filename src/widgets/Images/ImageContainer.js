import styled from 'styled-components';

const ImagesContainer = styled.div`
  max-width: 250px;
  margin: 5px 0;
  div {
    position: relative;
    img {
      max-width: 100%;
    }
    p {
      position: absolute;
      left: 0;
      bottom: 0;
      z-index: 100;
      /* transform: translateY(-100%); */
      width: 100%;
      background-color: var(--color-overlay);
      color: white;
      padding: 5px;
    }
  }
`;

export default ImagesContainer;