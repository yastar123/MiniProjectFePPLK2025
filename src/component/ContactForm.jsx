import React, { useState } from 'react';
import { ImageIcon, Palette, Type, AlignLeft, Link, Send, Plus, Folder } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    subject: '',
    name: '',
    email: '',
    explanation: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Form berhasil dikirim!');
    setFormData({
      subject: '',
      name: '',
      email: '',
      explanation: '',
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto mb-4 text-sm text-gray-600">
        <span>Home</span> <span className="mx-2"></span> <span>Contact Us</span>
      </div>

      {/* Form */}
      <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Subject, Name, Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full h-10 bg-gray-100 border-0 rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder=""
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full h-10 bg-gray-100 border-0 rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full h-10 bg-gray-100 border-0 rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="" required />
            </div>
          </div>

          {/* Explanation and Add File Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Explanation */}
            <div className="lg:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Explanation</label>
              <div className="bg-white border border-gray-200 rounded-t-md p-2 mb-1">
                <div className="flex space-x-2">
                  <button type="button" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
                    <ImageIcon className="w-4 h-4" />
                    <span className="text-xs">Image</span>
                  </button>
                  <button type="button" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
                    <Palette className="w-4 h-4" />
                    <span className="text-xs">Color</span>
                  </button>
                  <button type="button" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
                    <Type className="w-4 h-4" />
                    <span className="text-xs">Text</span>
                  </button>
                  <button type="button" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
                    <AlignLeft className="w-4 h-4" />
                    <span className="text-xs">Align</span>
                  </button>
                  <button type="button" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
                    <Link className="w-4 h-4" />
                    <span className="text-xs">Link</span>
                  </button>
                </div>
              </div>
              <textarea
                name="explanation"
                value={formData.explanation}
                onChange={handleInputChange}
                className="w-full h-40 bg-gray-100 border-0 rounded-b-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                placeholder="Type..."
                required
              />
            </div>

            {/* Add File */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Add File</label>
              <div className="h-48 border-2 border-dashed border-gray-300 rounded-md bg-gray-50 flex flex-col items-center justify-center text-center text-gray-500 hover:border-blue-400 transition-colors">
                <Folder className="w-12 h-12 mb-2" />
                <p className="text-sm mb-2">Drop Image Here, Paste Or</p>
                <button type="button" className="flex items-center space-x-1 text-gray-600 border border-gray-300 rounded-md px-3 py-1 hover:bg-gray-100">
                  <Plus className="w-4 h-4" />
                  <span className="text-sm">Select</span>
                </button>
              </div>
            </div>
          </div>

          {/* Send Button */}
          <div className="text-right">
            <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition-colors">
              <Send className="w-4 h-4 inline mr-1" />
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
