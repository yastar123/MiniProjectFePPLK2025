import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex justify-center items-center space-x-2">
      {/* Tombol Previous */}
      {currentPage > 1 && (
        <button onClick={() => onPageChange(currentPage - 1)} className="px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-md hover:bg-gray-100">
          Previous
        </button>
      )}

      {/* Tombol Nomor Halaman */}
      {pageNumbers.map(number => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`px-4 py-2 text-sm font-medium rounded-md ${
            currentPage === number 
            ? 'bg-blue-500 text-white' 
            : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          {number}
        </button>
      ))}

      {/* Tombol Next  */}
      {currentPage < totalPages && (
         <button onClick={() => onPageChange(currentPage + 1)} className="px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-md hover:bg-gray-100">
          Next &gt;
        </button>
      )}
    </nav>
  );
}

export default Pagination;