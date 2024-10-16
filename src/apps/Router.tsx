import {
  createBrowserRouter,
  RouteObject,
} from 'react-router-dom';
  
import ErrorLayout from '@layouts/ErrorLayout';
import RootLayout from '@layouts/RootLayout';
import TerminalRoutes from '@terminal/Routes';
  
  const routes: Array<RouteObject> = [
    {
      id: 'root',
      path: '',
      element: <RootLayout/>,
      errorElement: <ErrorLayout/>,
      children: [
        ...TerminalRoutes,
      ]
    },
  ];
  
  const Router = createBrowserRouter(routes);
  
  export default Router;