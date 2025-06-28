import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="text-center max-w-md mx-auto">
                {/* 404 Number */}
                <div className="text-9xl md:text-[12rem] lg:text-[16rem] font-bold text-red-500 leading-none">
                    404
                </div>

                {/* Error Messages */}
                <div className="mt-5 md:mt-8 mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Halaman Tidak Ditemukan
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base font-medium">
                        Maaf, halaman yang Anda cari tidak dapat ditemukan.
                        Mungkin halaman tersebut telah dipindahkan atau dihapus.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-200 shadow-md hover:shadow-lg"
                    >
                        Kembali ke Beranda
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200 shadow-md hover:shadow-lg"
                    >
                        Kembali
                    </button>
                </div>

                {/* Additional Help */}
                <div className="mt-12 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h3 className="text-sm font-semibold text-blue-800 mb-2">
                        Butuh Bantuan?
                    </h3>
                    <p className="text-sm text-blue-600">
                        Jika Anda yakin ini adalah kesalahan, silakan hubungi tim support kami.
                    </p>
                </div>
            </div>
        </div>
    );
}