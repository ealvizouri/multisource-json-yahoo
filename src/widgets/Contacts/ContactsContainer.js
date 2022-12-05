import styled from 'styled-components';

const ContactsContainer = styled.div`
  margin-bottom: 1rem;
  border: 1px solid var(--color-border);

  ul {
    height: calc(18vh - 1rem);
    overflow-y: scroll;

    li {
      padding: 0.5rem 1rem;
      display: flex;
      justify-content: center;
      flex-flow: column;
      .name, .company {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .name {
        width: calc(100% - 1rem);
        span {
          color: var(--color-text-light);
        }
      }
      .company {
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

export default ContactsContainer;