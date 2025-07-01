import React, { useState } from 'react';
import {
    Search,
    Menu,
    ChevronDown,
    X,
    Bookmark
} from 'lucide-react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-white shadow-sm border-b border-gray-200">
            {/* Desktop Navbar */}
            <div className="hidden md:flex items-center justify-between px-6 py-3">
                {/* Left Side - Logo and Navigation */}
                <div className="flex items-center space-x-8">
                    {/* Logo */}
                    <div className="flex items-center">
                        <span className="text-xl font-bold text-orange-500">MEGA</span>
                        <span className="text-xl font-bold text-gray-700">.news</span>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 cursor-pointer">
                            <span>Categories</span>
                            <ChevronDown size={16} />
                        </div>
                        <div className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 cursor-pointer">
                            <span>Pages</span>
                            <ChevronDown size={16} />
                        </div>
                        <span className="text-gray-700 hover:text-orange-500 cursor-pointer">Contact Us</span>
                        <span className="text-gray-700 hover:text-orange-500 cursor-pointer">About Us</span>
                    </div>
                </div>

                {/* Right Side - Icons, Search, and Profile */}
                <div className="flex items-center space-x-4">
                    {/* Search Bar with Search Icon inside */}
                    <div className="relative">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                            <Search className="text-gray-400" size={18} />
                        </div>
                        <input
                            type="text"
                            placeholder="Search Anything"
                            className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-600"
                        />
                    </div>

                    {/* Profile */}
                    <div className="lg:flex hidden items-center space-x-2">
                        <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-medium">B</span>
                        </div>
                        <span className="text-gray-700 font-medium">Behruz</span>
                        <ChevronDown size={16} className="text-gray-500" />
                    </div>

                    {/* Bookmark Icon */}
                    <button className="p-2 text-gray-500 hover:text-gray-700">
                        <Bookmark size={20} />
                    </button>
                </div>
            </div>

            {/* Mobile Navbar */}
            <div className="md:hidden bg-gray-100">
                <div className="flex items-center p-4 space-x-4">
                    {/* Menu Button with hamburger lines */}
                    <button
                        onClick={toggleMobileMenu}
                        className="w-12 h-12 bg-white rounded-lg flex flex-col items-center justify-center shadow-sm space-y-1"
                    >
                        <div className="w-5 h-0.5 bg-gray-800"></div>
                        <div className="w-5 h-0.5 bg-gray-800"></div>
                        <div className="w-5 h-0.5 bg-gray-800"></div>
                    </button>


                    {/* Search Bar - Full Width with search icon inside */}
                    <div className="flex-1 relative">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                            <Search className="text-gray-400" size={16} />
                        </div>
                        <input
                            type="text"
                            placeholder="Search Anything"
                            className="w-full pl-12 pr-12 py-3 bg-white rounded-lg shadow-sm border-0 focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-600"
                        />
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                {isMobileMenuOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={toggleMobileMenu}>
                        <div className="fixed left-0 top-0 bottom-0 w-80 bg-white shadow-lg" onClick={(e) => e.stopPropagation()}>
                            {/* Mobile Menu Header */}
                            <div className="flex items-center justify-between p-4 border-b border-gray-200">
                                <div className="flex items-center">
                                    <span className="text-xl font-bold text-orange-500">MEGA</span>
                                    <span className="text-xl font-bold text-gray-700">.news</span>
                                </div>
                                <button onClick={toggleMobileMenu} className="p-2 text-gray-500 hover:text-gray-700">
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Mobile Menu Items */}
                            <div className="p-4 space-y-4">
                                {/* Profile Section */}
                                <div className="flex items-center space-x-3 pb-4 border-b border-gray-200">
                                    <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                                        <span className="text-white font-medium">B</span>
                                    </div>
                                    <div>
                                        <div className="font-medium text-gray-900">Behruz</div>
                                        <div className="text-sm text-gray-500">User Profile</div>
                                    </div>
                                </div>

                                {/* Navigation Links */}
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between py-2 text-gray-700 hover:text-orange-500 cursor-pointer">
                                        <span>Categories</span>
                                        <ChevronDown size={16} />
                                    </div>
                                    <div className="flex items-center justify-between py-2 text-gray-700 hover:text-orange-500 cursor-pointer">
                                        <span>Pages</span>
                                        <ChevronDown size={16} />
                                    </div>
                                    <div className="py-2 text-gray-700 hover:text-orange-500 cursor-pointer">Contact Us</div>
                                    <div className="py-2 text-gray-700 hover:text-orange-500 cursor-pointer">About Us</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;