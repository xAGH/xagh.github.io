import { RouteObject, } from 'react-router-dom';

export default [
  {
    id: '',
    path: '',
    lazy: () => import('./pages/Terminal')
      .then(module => ({ Component: module.default })),
  }
] as Array<RouteObject>;