import { Route, Routes } from 'react-router-dom';

// Pages
import HomePage from '@/pages/home/HomePage';
import DashboardPage from '@/pages/dashboard/DashboardPage';
import AuthMiddleware from './middlewares/AuthMiddleware';

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />

            <Route element={<AuthMiddleware />}>
                <Route path='/dashboard' element={<DashboardPage />} />
            </Route>
        </Routes>
    );
}
