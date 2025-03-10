// routes.tsx (if you really intend to use a route config)
import Home from './routes/home';
import Welcome from './welcome/welcome';

const routes = [
  { path: '/', element: <Home />, file: 'routes/home.tsx' },
  { path: '/welcome', element: <Welcome />, file: 'welcome/welcome.tsx' },
];

export default routes;
