import React from 'react';
import ContactForm from '../component/Contactform/ContactForm';

const Contact = () => {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-100 to-red-300">
        <h1 className="text-4xl font-bold text-red-700 mb-4">Hubungi Kami</h1>
        <p className="text-lg text-red-900 mb-6">Ini adalah halaman kontak dengan navbar di atasnya.</p>
        <ContactForm />

      </div>
    );
};

export default Contact;