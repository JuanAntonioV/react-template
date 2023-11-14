import { getAuthState } from '@/stores/reducers/authReducer';
import { storeStatus } from '@/utils/globalEntities';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export default function AuthMiddleware() {
    const localToken = localStorage.getItem('token');
    const { status } = useSelector(getAuthState);
    const location = useLocation();

    const isLoading = useMemo(() => status === storeStatus.loading, [status]);

    if (isLoading) return null;

    return (
        <>
            {!isLoading && !!localToken ? (
                <Outlet />
            ) : !isLoading && !localToken ? (
                <Navigate
                    to={'/'}
                    replace
                    state={{
                        from: location.pathname,
                    }}
                />
            ) : null}
        </>
    );
}
