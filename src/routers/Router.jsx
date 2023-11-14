import { Route, Routes } from 'react-router-dom';

// Pages
import HomePage from '@/pages/home/HomePage';

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
        </Routes>
    );
}
