import styled from 'styled-components';

const SlacksContainer = styled.div`
  margin-bottom: 1rem;
  border: 1px solid var(--color-border);

  ul {
    overflow-y: scroll;
    height: calc(18vh - 1rem);
  }
`;

export default SlacksContainer;