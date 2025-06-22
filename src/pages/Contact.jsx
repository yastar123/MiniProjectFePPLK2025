import React from 'react';

const Contact = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-100 to-red-300">
            <h1 className="text-4xl font-bold text-red-700 mb-4">Hubungi Kami</h1>
            <p className="text-lg text-red-900 mb-6">Ini adalah halaman kontak dengan navbar di atasnya.</p>
            <button className="px-6 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition">Tombol Contact</button>
        </div>
    );
};

export default Contact; 