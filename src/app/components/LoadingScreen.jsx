// components/LoadingScreen.js
import React from 'react';

const LoadingScreen = () => (
    <div className='container text-center'>
        <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>
);

export default LoadingScreen;
