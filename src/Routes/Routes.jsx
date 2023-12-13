import { Navigate, createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main/Main';
import Home from '../components/Home/Home/Home';
import NewsDetails from '../Layouts/NewsDetails/NewsDetails';
import Login from '../Layouts/Login/Login';
import Registation from '../components/Registation/Registation';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

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
    element: (
      <PrivateRoute>
        <NewsDetails></NewsDetails>
      </PrivateRoute>
    ),
    loader: ({ params }) => fetch(`http://localhost:5000/${params.id}`),
  },
  {
    path: 'login',
    element: <Login></Login>,
  },
  {
    path: 'registation',
    element: <Registation></Registation>,
  },
]);

export default router;
