import React from 'react';
import Loading from '../component/Loading/Loading';

const LoadingPage = ({ message = "Memuat Halaman..." }) => {
    return <Loading message={message} />;
};

export default LoadingPage; 