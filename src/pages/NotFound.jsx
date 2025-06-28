import React from 'react';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="text-center">
                {/* 404 Number */}
                <div className="text-9xl md:text-[12rem] lg:text-[16rem] font-bold text-red-500 leading-none">
                    404
                </div>

                {/* Error Messages */}
                <div className="mt-5 md:mt-8">
                    <p className="text-gray-600 text-sm md:text-base font-medium">
                        OOPS! Page You're Looking For Doesn't Exist. Please Use Search For Help
                    </p>
                </div>
            </div>
        </div>
    );
}