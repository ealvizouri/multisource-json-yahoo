import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../../layout/MainLayout';
import HomePage from '../../pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <HomePage />
      }
    ]
  }
]);

export default router;