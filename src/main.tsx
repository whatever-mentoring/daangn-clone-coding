import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Homepage/HomePage';
import CompanyPage from './CompanyPage/CompanyPage';
import CulturePage from './CulturePage/CulturePage';
import ServicePage from './ServicePage/ServicePage';
import BlogPage from './BlogPage/BlogPage';
import JobsPage from './JobsPage/JobsPage';
import ErrorPage from './ErrorPage/ErrorPage';
import Layout from './Layout';

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/company/',
        element: <CompanyPage />,
      },
      {
        path: '/culture/',
        element: <CulturePage />,
      },
      {
        path: '/service/',
        element: <ServicePage />,
      },
      {
        path: '/blog/',
        element: <BlogPage />,
      },
      {
        path: '/jobs/',
        element: <JobsPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
