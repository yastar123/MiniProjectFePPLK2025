import React from 'react';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">Halo, Selamat Datang!</h1>
      <p className="text-lg text-blue-900 mb-6">Ini adalah halaman sederhana menggunakan React dan TailwindCSS.</p>
      <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">Klik Saya</button>
    </div>
  );
}

export default App;
