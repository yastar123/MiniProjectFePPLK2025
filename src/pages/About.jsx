import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 to-purple-300">
            <h1 className="text-4xl font-bold text-purple-700 mb-4">Tentang Kami</h1>
            <p className="text-lg text-purple-900 mb-6">Ini adalah halaman tentang kami dengan navbar di atasnya.</p>
            <button className="px-6 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition">Tombol About</button>
        </div>
    );
};

export default About; 