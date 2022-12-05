import styled from 'styled-components';

const TweetsContainer = styled.div`
  border: 1px solid var(--color-border);
  ul {
    overflow-y: scroll;
    height: 100px;

    li.spinner {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export default TweetsContainer;