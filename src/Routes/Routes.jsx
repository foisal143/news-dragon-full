import { Navigate, createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main/Main';
import Home from '../components/Home/Home/Home';
import NewsDetails from '../Layouts/NewsDetails/NewsDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    loader: () => fetch('http://localhost:5000/category'),
    children: [
      {
        path: '/',
        element: <Navigate to="category/0"></Navigate>,
      },
      {
        path: 'category/:id',
        element: <Home></Home>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
    ],
  },
  {
    path: '/:id',
    element: <NewsDetails></NewsDetails>,
    loader: ({ params }) => fetch(`http://localhost:5000/${params.id}`),
  },
]);

export default router;
