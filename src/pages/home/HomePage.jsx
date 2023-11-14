import CenterLayout from '@/layouts/CenterLayout';
import { getAuthState, login, logout } from '@/stores/reducers/authReducer';
import { Button, ButtonGroup, Typography } from '@material-tailwind/react';
import { useId } from 'react';
import toast from 'react-hot-toast';
import { DiOpensource } from 'react-icons/di';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

export default function HomePage() {
    const id = useId();
    const dispatch = useDispatch();
    const { isAuth } = useSelector(getAuthState);
    const navigate = useNavigate();
    const { state } = useLocation();

    const showToast = () => toast.success('This is a success toast!');

    const handleLogin = () => {
        dispatch(
            login({
                user: {
                    name: 'John Doe',
                    email: 'jhondoe@gmail.com',
                },
                token: id,
            })
        );

        navigate(state?.from || '/dashboard');
        toast.success('Logged in!');
    };

    const handleLogout = () => {
        dispatch(logout());
        toast.success('Logged out!');
    };

    const handleDashboard = () => {
        navigate('/dashboard');
    };

    return (
        <CenterLayout className='gap-10'>
            <header className='text-center'>
                <Typography variant='h3'>
                    Welcome to the template page!
                </Typography>
                <Typography variant='paragraph'>
                    This is a template page. You can use it as a starting point
                    for your own pages.
                </Typography>
            </header>

            <main className='w-full max-w-2xl p-6 bg-white border rounded-2xl'>
                <Button
                    color='blue'
                    onClick={showToast}
                    className='flex items-center gap-2'
                >
                    <DiOpensource size={20} /> Show Toast
                </Button>

                <Typography variant='h5' className='mt-8'>
                    Authentication state: {isAuth ? 'Logged in' : 'Logged out'}
                </Typography>

                <ButtonGroup color='cyan' className='mt-8'>
                    <Button onClick={handleLogin}>Login</Button>
                    <Button onClick={handleLogout}>Logout</Button>
                </ButtonGroup>

                <Button color='red' className='mt-8' onClick={handleDashboard}>
                    Go to dashboard
                </Button>
            </main>
        </CenterLayout>
    );
}
