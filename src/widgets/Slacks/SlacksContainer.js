import styled from 'styled-components';

const SlacksContainer = styled.div`
  margin-bottom: 1rem;
  border: 1px solid var(--color-border);

  ul {
    overflow-y: scroll;
    height: calc(18vh - 1rem);

    li {
      padding: 0.5rem 1rem;
      display: flex;
      justify-content: center;
      flex-flow: column;
      .author, .company {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .author {
        width: calc(100% - 1rem);
        span {
          color: var(--color-text-light);
        }
      }
      .message {
        color: var(--color-text-light);
        width: calc(100% - 2rem);
      }
    }
  }
`;

export default SlacksContainer;