import React, { useContext } from 'react';
import { contextProvider } from '../AuthProvider';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const {user, loading} = useContext(contextProvider);

    if(user?.email){
        return children;
    }
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    return (
        <Navigate to='/login' replace></Navigate>
    );
};

export default ProtectedRoute;