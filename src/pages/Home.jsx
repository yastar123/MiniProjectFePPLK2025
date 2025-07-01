import React from 'react';
import NewPosts from '../component/NewPosts.jsx'; 
import TopPosts from '../component/TopPosts'; 
// import ContactForm from '../component/ContactForm';
import Comments from '../component/Comments';



function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-green-700 text-center mb-6">Halaman Beranda</h1>
      <NewPosts /> 
      <TopPosts />
      <Comments />
    </div>
  );
}

export default Home;
/* <ContactForm /> */



