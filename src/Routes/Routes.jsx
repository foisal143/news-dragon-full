import { Navigate, createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main/Main';
import Home from '../components/Home/Home/Home';

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
]);

export default router;
