import { lazy } from 'react';

const Login = lazy(() => import('./Login/Login'));
const Dashboard = lazy(() => import('./Dashboard/Dashboard'));

export const AllRoutes = [
    {
        path: "/",
        element: <Login />,
    },
    {
        path: '/dashboard',
        element: <Dashboard />
    }
]