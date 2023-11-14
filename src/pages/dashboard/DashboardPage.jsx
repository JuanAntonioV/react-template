import { getAuthState } from '@/stores/reducers/authReducer';
import { Button, Typography } from '@material-tailwind/react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function DashboardPage() {
    const { user } = useSelector(getAuthState);
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/');
    };

    return (
        <div>
            <Typography variant='h3' className='text-center'>
                Dashboard : {user?.name}
            </Typography>

            <Typography variant='paragraph' className='text-center'>
                This is a dashboard page.
            </Typography>

            <Button onClick={handleBack}>Go Back</Button>
        </div>
    );
}
