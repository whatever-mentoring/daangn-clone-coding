import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Homepage/HomePage';
import CompanyPage from './CompanyPage/CompanyPage';
import CulturePage from './CulturePage/CulturePage';
import ServicePage from './ServicePage/ServicePage';
import BlogPage from './BlogPage/BlogPage';
import PostPage from './PostPage/PostPage';
import JobsPage from './JobsPage/JobsPage';
import ErrorPage from './ErrorPage/ErrorPage';
import Layout from './Layout';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';

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
        path: '/blog/:id',
        element: <PostPage />,
      },
      {
        path: '/jobs/',
        element: <JobsPage />,
      },
    ],
  },
]);

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }
  const { worker } = await import('./mocks/browser');
  return worker.start({ onUnhandledRequest: 'bypass' });
}

const queryClient = new QueryClient();

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </React.StrictMode>,
  );
});
