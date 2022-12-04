import styled from 'styled-components';

const MainLayoutContainer = styled.div`
  padding: 1rem;
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
    grid-template-rows: 1fr 8fr 1fr;
    grid-template-areas: 
    "header header header header"
    "sidebar main main main"
    "footer footer footer footer";
  }
`;

export default MainLayoutContainer;