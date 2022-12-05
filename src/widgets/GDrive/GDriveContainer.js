import styled from 'styled-components';

const GDriveContainer = styled.div`
  border: 1px solid var(--color-border);

  ul {
    overflow-y: scroll;
    height: calc(18vh - 1rem);

    li {
      display: flex;
      justify-content: center;
    }
  }
`;

export default GDriveContainer;