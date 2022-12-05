import styled from 'styled-components';

const ContactsContainer = styled.div`
  margin-bottom: 1rem;
  border: 1px solid var(--color-border);

  ul {
    height: calc(18vh - 1rem);
    overflow-y: scroll;
  }
`;

export default ContactsContainer;