import styled from 'styled-components';

const TweetsContainer = styled.div`
  border: 1px solid var(--color-border);
  ul {
    overflow-y: scroll;
    height: 100px;

    li {
      padding: 0.5rem 1rem;
      display: flex;
      justify-content: center;
      flex-flow: column;
      .username, {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }

      .tweet {
        color: var(--color-text-light);
        width: calc(100% - 2rem);
      }

      .spinner {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;

export default TweetsContainer;