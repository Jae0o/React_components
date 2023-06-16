import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import Videos from './pages/Videos';
import NotFound from './pages/NotFound';
import Root from './pages/Root';
import VideosDetail from './pages/VideosDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: '/Videos', element: <Videos /> },
      { path: '/Videos/:ID', element: <VideosDetail /> }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
