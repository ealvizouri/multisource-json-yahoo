import styled from 'styled-components';

const MainLayoutContainer = styled.div`
  padding: 1rem;
  margin-bottom: 4rem;
  .layout-header {
    grid-area: header;
  }
  .layout-main {
    grid-area: main;
  }
  .layout-sidebar {
    grid-area: sidebar;
  }
  .layout-footer {
    grid-area: footer;
  }

  .main-layout {
    display: grid;
    column-gap: 0.2rem;
    row-gap: 0.5rem;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: ${({ row1 = 55, row3 = 100 }) => `${row1}px calc(100% - ${row1 + row3}px) ${row3}px`};
    grid-template-areas: 
    "header header header header"
    "sidebar main main main"
    "footer footer footer footer";
  }
`;

export default MainLayoutContainer;