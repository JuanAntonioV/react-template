import Router from '@/routers/Router';
import { getAuth } from '@/stores/reducers/authReducer';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';

export default function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAuth());
    }, []);

    return (
        <>
            <Router />
            <Toaster
                position='top-right'
                reverseOrder={false}
                gutter={8}
                containerClassName=''
                containerStyle={{}}
                toastOptions={{
                    // Define default options
                    className: '',
                    duration: 5000,
                    // Default options for specific types
                    success: {
                        duration: 3000,
                    },
                }}
            />
        </>
    );
}
