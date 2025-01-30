import { createBrowserRouter } from 'react-router-dom';
// Routes
import Index from './routes/Index';
import Root from './routes/Root';
import Destinations from './routes/Destinations';
import Crew from './routes/Crew';
import Technology from './routes/Technology';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Index /> },
      { path: 'destination', element: <Destinations /> },
      { path: 'crew', element: <Crew /> },
      { path: 'technology', element: <Technology /> },
    ],
  },
]);
