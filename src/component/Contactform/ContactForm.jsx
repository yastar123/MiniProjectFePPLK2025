import React, { useState } from 'react';
import { 
  Image, 
  Palette, 
  Type, 
  AlignLeft, 
  Link, 
  Home, 
  Bookmark, 
  User, 
  ChevronUp,
  Plus
} from 'lucide-react';

export default function ContactForm() {
  const [subject, setSubject] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [explanation, setExplanation] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = () => {
    // Simulate file selection
    const input = document.createElement('input');
    input.type = 'file';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setSelectedFile(file.name);
      }
    };
    input.click();
  };

  return (
    <div className="bg-gray-50 my-16 p-4">
      {/* Desktop Layout */}
      <div className="hidden md:block max-w-6xl mx-auto">
        <div className="grid grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Subject Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Explanation Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Explanation
              </label>
              
              {/* Rich Text Editor Toolbar */}
              <div className="border border-gray-300 rounded-t-md bg-white p-2 flex items-center space-x-4">
                <button className="flex items-center space-x-1 px-2 py-1 hover:bg-gray-100 rounded">
                  <Image size={16} className="text-gray-600" />
                  <span className="text-sm text-gray-600">Image</span>
                </button>
                <button className="flex items-center space-x-1 px-2 py-1 hover:bg-gray-100 rounded">
                  <Palette size={16} className="text-gray-600" />
                  <span className="text-sm text-gray-600">Color</span>
                </button>
                <button className="flex items-center space-x-1 px-2 py-1 hover:bg-gray-100 rounded">
                  <Type size={16} className="text-gray-600" />
                  <span className="text-sm text-gray-600">Text</span>
                </button>
                <button className="flex items-center space-x-1 px-2 py-1 hover:bg-gray-100 rounded">
                  <AlignLeft size={16} className="text-gray-600" />
                  <span className="text-sm text-gray-600">Align</span>
                </button>
                <button className="flex items-center space-x-1 px-2 py-1 hover:bg-gray-100 rounded">
                  <Link size={16} className="text-gray-600" />
                  <span className="text-sm text-gray-600">Link</span>
                </button>
              </div>
              
              {/* Text Area */}
              <textarea
                value={explanation}
                onChange={(e) => setExplanation(e.target.value)}
                placeholder="Type..."
                className="w-full px-3 py-2 border-l border-r border-b border-gray-300 rounded-b-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none h-32"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Add File Section */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Add File
              </label>
              <div 
                onClick={handleFileSelect}
                className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 cursor-pointer bg-gray-50"
              >
                <div className="mx-auto w-16 h-16 text-gray-400 mb-4">
                  <svg viewBox="0 0 64 64" fill="currentColor" className="w-full h-full">
                    <path d="M50 8H14C11.79 8 10 9.79 10 12v40c0 2.21 1.79 4 4 4h36c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zM14 12h36v32l-8-8-6 6-8-8-14 14V12z"/>
                    <circle cx="22" cy="22" r="4"/>
                  </svg>
                </div>
                <p className="text-gray-500 mb-2">Drop Image Here, Paste Or</p>
                <button className="flex items-center justify-center mx-auto text-gray-600 hover:text-gray-800">
                  <Plus size={16} className="mr-1" />
                  Select
                </button>
                {selectedFile && (
                  <p className="mt-2 text-sm text-green-600">Selected: {selectedFile}</p>
                )}
              </div>
            </div>

            {/* Send Button */}
            <div className="text-right">
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-md font-medium transition-colors">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="space-y-4">
          {/* Subject Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Subject
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Explanation Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Explanation
            </label>
            
            {/* Rich Text Editor Toolbar - Mobile */}
            <div className="border border-gray-300 rounded-t-md bg-white p-2 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <button className="p-1 hover:bg-gray-100 rounded">
                  <Image size={16} className="text-gray-600" />
                </button>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <Palette size={16} className="text-gray-600" />
                </button>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <Type size={16} className="text-gray-600" />
                </button>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <AlignLeft size={16} className="text-gray-600" />
                </button>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <Link size={16} className="text-gray-600" />
                </button>
              </div>
            </div>
            
            {/* Text Area */}
            <textarea
              value={explanation}
              onChange={(e) => setExplanation(e.target.value)}
              placeholder="Type..."
              className="w-full px-3 py-2 border-l border-r border-b border-gray-300 rounded-b-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none h-24"
            />
          </div>

          {/* Bottom Navigation */}
          <div className="flex justify-center items-center space-x-8 py-4 border-t border-gray-200">
            <button className="p-2 hover:bg-gray-100 rounded">
              <Home size={20} className="text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded">
              <Bookmark size={20} className="text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded">
              <User size={20} className="text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded">
              <ChevronUp size={20} className="text-gray-600" />
            </button>
          </div>

          {/* Add Image Section */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Add Image
            </label>
            <div 
              onClick={handleFileSelect}
              className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 cursor-pointer bg-gray-50"
            >
              <div className="mx-auto w-12 h-12 text-gray-400 mb-2">
                <svg viewBox="0 0 64 64" fill="currentColor" className="w-full h-full">
                  <path d="M50 8H14C11.79 8 10 9.79 10 12v40c0 2.21 1.79 4 4 4h36c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zM14 12h36v32l-8-8-6 6-8-8-14 14V12z"/>
                  <circle cx="22" cy="22" r="4"/>
                </svg>
              </div>
              <p className="text-sm text-gray-500 mb-2">Drop File Here, Paste Or</p>
              <button className="flex items-center justify-center mx-auto text-gray-600 hover:text-gray-800">
                <Plus size={16} className="mr-1" />
                Select
              </button>
              {selectedFile && (
                <p className="mt-2 text-sm text-green-600">Selected: {selectedFile}</p>
              )}
            </div>
          </div>

          {/* Send Button */}
          <div className="text-center pt-4">
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-2 rounded-md font-medium transition-colors w-full">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}