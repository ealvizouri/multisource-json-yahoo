import styled from 'styled-components';

const GDriveContainer = styled.div`
  border: 1px solid var(--color-border);

  ul {
    overflow-y: scroll;
    height: calc(18vh - 1rem);

    li {
      padding: 0.5rem 1rem;
      display: flex;
      justify-content: center;
      flex-flow: column;
      .title, .path {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .title {
        width: calc(100% - 1rem);
      }
      .path {
        color: var(--color-text-light);
        width: calc(100% - 2rem);
      }
      &.spinner {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;

export default GDriveContainer;