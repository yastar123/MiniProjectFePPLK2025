import React, { useState, useEffect } from 'react';

const Loading = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    // Reset to 0 when reaches 100 to create continuous loading
                    return 0;
                }
                return prev + Math.random() * 2 + 0.5;
            });
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-white flex items-center justify-center">
            <div className="text-center">
                {/* Logo MEGA.news */}
                <h1 className="text-4xl font-normal text-orange-500 mb-8 tracking-wide">
                    MEGA.news
                </h1>
                {/* Progress bar */}
                <div className="w-80 mx-auto">
                    <div className="w-full bg-gray-200 rounded-full h-1">
                        <div
                            className="h-1 bg-orange-500 rounded-full transition-all duration-200 ease-out"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loading; 