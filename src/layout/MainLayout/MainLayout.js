import { Outlet } from 'react-router-dom';
import MainLayoutContainer from './MainLayoutContainer';
import { SearchBar } from '../../components';

const MainLayout = () => {
  return (
    <MainLayoutContainer>
      <div className="main-layout">
        <div className="layout-header">
          <SearchBar />
        </div>
        <Outlet />
      </div>
    </MainLayoutContainer>
  );
}

export default MainLayout;