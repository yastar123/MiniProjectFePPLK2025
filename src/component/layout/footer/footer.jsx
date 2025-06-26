import React, { useState } from 'react';
import {
    ChevronDown,
    ChevronUp,
    Instagram,
    Twitter,
    Mail,
    Send,
    User,
    Camera,
    Music,
    Gamepad2,
    Coffee,
    BookOpen,
    Headphones,
    Palette,
    Heart,
    Shirt,
    Monitor
} from 'lucide-react';

const Footer = () => {
    const [activeSection, setActiveSection] = useState(null);
    const [email, setEmail] = useState('');

    const toggleSection = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };

    const handleEmailSubmit = () => {
        if (email.trim()) {
            alert(`Subscribed with email: ${email}`);
            setEmail('');
        }
    };

    return (
        <footer className=" py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Desktop Layout */}
                <div className="hidden lg:grid lg:grid-cols-4 lg:gap-12">
                    {/* Column 1: Mega News & Newsletters */}
                    <div className="space-y-8">
                        {/* Mega News */}
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                                <span className="w-1 h-6 bg-red-500 mr-3"></span>
                                Mega News
                            </h3>
                            <div className="text-sm text-gray-600 leading-relaxed">
                                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing
                                Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et
                                Dolore Magna Aliqua. Quis Ipsum Suspendisse
                                Accumsan In Nisl. Nisl Arcu Cursus Vitae Congue
                                Mauris Rhoncus Aenean Vel Elit Scelerisque. In
                                Egestas Erat Imperdiet Sed Euismod Nisl Porta Lorem
                                Mollis. Morbi Tristique Senectus Et Netus. Mattis
                                Pellentesque Id Nibh Tortor Id Aliquet Lectus Proin.
                            </div>
                        </div>

                        {/* Newsletters */}
                        <div>
                            <h4 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                                <span className="w-1 h-6 bg-red-500 mr-3"></span>
                                Newsletters
                            </h4>
                            <div className="flex border border-gray-200">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Write Your Email..."
                                    className="flex-1 px-4 py-3 text-sm text-gray-600 focus:outline-none bg-white"
                                />
                                <button
                                    onClick={handleEmailSubmit}
                                    className="px-4 py-3 bg-gray-100 hover:bg-gray-200 transition-colors border-l border-gray-200"
                                >
                                    <Send className="w-4 h-4 text-gray-500" />
                                </button>
                            </div>
                            <div className="mt-6 text-xs text-gray-500">
                                <span className="hover:text-red-500 cursor-pointer">Privacy Policy</span>
                                <span className="mx-1">|</span>
                                <span className="hover:text-red-500 cursor-pointer">Terms & Conditions</span>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Categories & Social Network */}
                    <div className="space-y-8">
                        {/* Categories */}
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                                <span className="w-1 h-6 bg-red-500 mr-3"></span>
                                Categories
                            </h3>
                            <div className="space-y-3">
                                <div className="text-sm text-gray-600 hover:text-red-500 cursor-pointer transition-colors">
                                    Culture
                                </div>
                                <div className="text-sm text-gray-600 hover:text-red-500 cursor-pointer transition-colors">
                                    Fashion
                                </div>
                                <div className="text-sm text-gray-600 hover:text-red-500 cursor-pointer transition-colors">
                                    Entertainment
                                </div>
                                <div className="text-sm text-gray-600 hover:text-red-500 cursor-pointer transition-colors">
                                    Food
                                </div>
                                <div className="text-sm text-gray-600 hover:text-red-500 cursor-pointer transition-colors">
                                    Health Life
                                </div>
                                <div className="text-sm text-gray-600 hover:text-red-500 cursor-pointer transition-colors">
                                    Technology
                                </div>
                            </div>
                        </div>

                        {/* Social Network */}
                        <div>
                            <h4 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                                <span className="w-1 h-6 bg-red-500 mr-3"></span>
                                Social Network
                            </h4>
                            <div className="flex space-x-3">
                                <button className="px-4 py-2 bg-pink-500 text-white text-sm font-medium rounded hover:bg-pink-600 transition-colors flex items-center">
                                    <Instagram className="w-4 h-4 mr-2" />
                                    Instagram
                                </button>
                                <button className="px-4 py-2 bg-blue-400 text-white text-sm font-medium rounded hover:bg-blue-500 transition-colors flex items-center">
                                    <Twitter className="w-4 h-4 mr-2" />
                                    Twitter
                                </button>
                            </div>
                            <div className="mt-8 text-xs text-gray-500">
                                All Copyright © 2022 Reserved
                            </div>
                        </div>
                    </div>

                    {/* Column 3: New Comments */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                            <span className="w-1 h-6 bg-red-500 mr-3"></span>
                            New Comments
                        </h3>
                        <div className="space-y-4">
                            {/* Comment 1 */}
                            <div className="bg-white p-4 rounded-lg">
                                <div className="flex items-start space-x-3">
                                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                        <User className="w-5 h-5 text-gray-500" />
                                    </div>
                                    <div className="flex-1">
                                        <h5 className="font-semibold text-sm text-gray-900 mb-1">EllemarTx</h5>
                                        <p className="text-xs text-gray-600 leading-relaxed">
                                            How Nice Does This Look 😍 I Feel It Should Be Delicious...
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Comment 2 */}
                            <div className="bg-white p-4 rounded-lg">
                                <div className="flex items-start space-x-3">
                                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                        <User className="w-5 h-5 text-gray-500" />
                                    </div>
                                    <div className="flex-1">
                                        <h5 className="font-semibold text-sm text-gray-900 mb-1">Cassia</h5>
                                        <p className="text-xs text-gray-600 leading-relaxed">
                                            Take A Rest, I'll Be Cheer Up You Again In 2 Next Game Go 🎮
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Comment 3 */}
                            <div className="bg-white p-4 rounded-lg">
                                <div className="flex items-start space-x-3">
                                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                        <User className="w-5 h-5 text-gray-500" />
                                    </div>
                                    <div className="flex-1">
                                        <h5 className="font-semibold text-sm text-gray-900 mb-1">Amanda</h5>
                                        <p className="text-xs text-gray-600 leading-relaxed">
                                            You Were Stunning Today, Joni! 💝 What Music 🎵
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Comment 4 */}
                            <div className="bg-white p-4 rounded-lg">
                                <div className="flex items-start space-x-3">
                                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                        <User className="w-5 h-5 text-gray-500" />
                                    </div>
                                    <div className="flex-1">
                                        <h5 className="font-semibold text-sm text-gray-900 mb-1">Denis Simonassi</h5>
                                        <p className="text-xs text-gray-600 leading-relaxed">
                                            It Was A Great Match Today Jaron! You Did Great! 👏
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 4: Follow On Instagram */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                            <span className="w-1 h-6 bg-red-500 mr-3"></span>
                            Follow On Instagram
                        </h3>
                        <div className="grid grid-cols-3 gap-2">
                            {/* Row 1 */}
                            <div className="aspect-square bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                                <Camera className="w-6 h-6 text-white" />
                            </div>
                            <div className="aspect-square bg-gradient-to-br from-yellow-400 to-orange-400 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform">
                                <div className="w-full h-full bg-yellow-500 flex items-center justify-center">
                                    <Coffee className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <div className="aspect-square bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                                <Music className="w-6 h-6 text-white" />
                            </div>

                            {/* Row 2 */}
                            <div className="aspect-square bg-gradient-to-br from-orange-400 to-red-400 rounded-lg flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                                <BookOpen className="w-6 h-6 text-white" />
                            </div>
                            <div className="aspect-square bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                                <Headphones className="w-6 h-6 text-white" />
                            </div>
                            <div className="aspect-square bg-gradient-to-br from-red-400 to-pink-500 rounded-lg flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                                <Heart className="w-6 h-6 text-white" />
                            </div>

                            {/* Row 3 */}
                            <div className="aspect-square bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                                <User className="w-6 h-6 text-white" />
                            </div>
                            <div className="aspect-square bg-gradient-to-br from-teal-400 to-blue-500 rounded-lg flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                                <Gamepad2 className="w-6 h-6 text-white" />
                            </div>
                            <div className="aspect-square bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                                <Palette className="w-6 h-6 text-white" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className="lg:hidden">
                    {/* Mega News */}
                    <div className="mb-6">
                        <button
                            onClick={() => toggleSection('news')}
                            className="w-full flex items-center justify-between py-3 text-left"
                        >
                            <h3 className="text-lg font-bold text-gray-900 flex items-center">
                                <span className="w-1 h-6 bg-red-500 mr-3"></span>
                                Mega News
                            </h3>
                            {activeSection === 'news' ? (
                                <ChevronUp className="w-5 h-5 text-gray-500" />
                            ) : (
                                <ChevronDown className="w-5 h-5 text-gray-500" />
                            )}
                        </button>
                        {activeSection === 'news' && (
                            <div className="pb-4">
                                <div className="text-sm text-gray-600 leading-relaxed">
                                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing
                                    Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et
                                    Dolore Magna Aliqua. Quis Ipsum Suspendisse
                                    Accumsan In Nisl. Nisl Arcu Cursus Vitae Congue
                                    Mauris Rhoncus Aenean Vel Elit Scelerisque.
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Categories */}
                    <div className="mb-6">
                        <button
                            onClick={() => toggleSection('categories')}
                            className="w-full flex items-center justify-between py-3 text-left"
                        >
                            <h3 className="text-lg font-bold text-gray-900 flex items-center">
                                <span className="w-1 h-6 bg-red-500 mr-3"></span>
                                Categories
                            </h3>
                            {activeSection === 'categories' ? (
                                <ChevronUp className="w-5 h-5 text-gray-500" />
                            ) : (
                                <ChevronDown className="w-5 h-5 text-gray-500" />
                            )}
                        </button>
                        {activeSection === 'categories' && (
                            <div className="pb-4 space-y-3">
                                <div className="text-sm text-gray-600 hover:text-red-500 cursor-pointer transition-colors py-1">Culture</div>
                                <div className="text-sm text-gray-600 hover:text-red-500 cursor-pointer transition-colors py-1">Fashion</div>
                                <div className="text-sm text-gray-600 hover:text-red-500 cursor-pointer transition-colors py-1">Entertainment</div>
                                <div className="text-sm text-gray-600 hover:text-red-500 cursor-pointer transition-colors py-1">Food</div>
                                <div className="text-sm text-gray-600 hover:text-red-500 cursor-pointer transition-colors py-1">Health Life</div>
                                <div className="text-sm text-gray-600 hover:text-red-500 cursor-pointer transition-colors py-1">Technology</div>
                            </div>
                        )}
                    </div>

                    {/* New Comments */}
                    <div className="mb-6">
                        <button
                            onClick={() => toggleSection('comments')}
                            className="w-full flex items-center justify-between py-3 text-left"
                        >
                            <h3 className="text-lg font-bold text-gray-900 flex items-center">
                                <span className="w-1 h-6 bg-red-500 mr-3"></span>
                                New Comments
                            </h3>
                            {activeSection === 'comments' ? (
                                <ChevronUp className="w-5 h-5 text-gray-500" />
                            ) : (
                                <ChevronDown className="w-5 h-5 text-gray-500" />
                            )}
                        </button>
                        {activeSection === 'comments' && (
                            <div className="pb-4 space-y-4">
                                <div className="bg-white p-4 rounded-lg">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                            <User className="w-5 h-5 text-gray-500" />
                                        </div>
                                        <div className="flex-1">
                                            <h5 className="font-semibold text-sm text-gray-900 mb-1">EllemarTx</h5>
                                            <p className="text-xs text-gray-600 leading-relaxed">
                                                How Nice Does This Look 😍 I Feel It Should Be Delicious...
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                            <User className="w-5 h-5 text-gray-500" />
                                        </div>
                                        <div className="flex-1">
                                            <h5 className="font-semibold text-sm text-gray-900 mb-1">Cassia</h5>
                                            <p className="text-xs text-gray-600 leading-relaxed">
                                                Take A Rest, I'll Be Cheer Up You Again In 2 Next Game Go 🎮
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                            <User className="w-5 h-5 text-gray-500" />
                                        </div>
                                        <div className="flex-1">
                                            <h5 className="font-semibold text-sm text-gray-900 mb-1">Amanda</h5>
                                            <p className="text-xs text-gray-600 leading-relaxed">
                                                You Were Stunning Today, Joni! 💝 What Music 🎵
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                            <User className="w-5 h-5 text-gray-500" />
                                        </div>
                                        <div className="flex-1">
                                            <h5 className="font-semibold text-sm text-gray-900 mb-1">Denis Simonassi</h5>
                                            <p className="text-xs text-gray-600 leading-relaxed">
                                                It Was A Great Match Today Jaron! You Did Great! 👏
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Follow On Instagram */}
                    <div className="mb-6">
                        <button
                            onClick={() => toggleSection('instagram')}
                            className="w-full flex items-center justify-between py-3 text-left"
                        >
                            <h3 className="text-lg font-bold text-gray-900 flex items-center">
                                <span className="w-1 h-6 bg-red-500 mr-3"></span>
                                Follow On Instagram
                            </h3>
                            {activeSection === 'instagram' ? (
                                <ChevronUp className="w-5 h-5 text-gray-500" />
                            ) : (
                                <ChevronDown className="w-5 h-5 text-gray-500" />
                            )}
                        </button>
                        {activeSection === 'instagram' && (
                            <div className="pb-4">
                                <div className="grid grid-cols-3 gap-2">
                                    <div className="aspect-square bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center cursor-pointer">
                                        <Camera className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="aspect-square bg-yellow-500 rounded-lg flex items-center justify-center cursor-pointer">
                                        <Coffee className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="aspect-square bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center cursor-pointer">
                                        <Music className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="aspect-square bg-gradient-to-br from-orange-400 to-red-400 rounded-lg flex items-center justify-center cursor-pointer">
                                        <BookOpen className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="aspect-square bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center cursor-pointer">
                                        <Headphones className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="aspect-square bg-gradient-to-br from-red-400 to-pink-500 rounded-lg flex items-center justify-center cursor-pointer">
                                        <Heart className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="aspect-square bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex items-center justify-center cursor-pointer">
                                        <User className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="aspect-square bg-gradient-to-br from-teal-400 to-blue-500 rounded-lg flex items-center justify-center cursor-pointer">
                                        <Gamepad2 className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="aspect-square bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center cursor-pointer">
                                        <Palette className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Newsletter */}
                    <div className="mb-6">
                        <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                            <span className="w-1 h-6 bg-red-500 mr-3"></span>
                            Newsletters
                        </h4>
                        <div className="flex border border-gray-200">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Write Your Email..."
                                className="flex-1 px-4 py-3 text-sm text-gray-600 focus:outline-none bg-white"
                            />
                            <button
                                onClick={handleEmailSubmit}
                                className="px-4 py-3 bg-gray-100 hover:bg-gray-200 transition-colors border-l border-gray-200"
                            >
                                <Send className="w-4 h-4 text-gray-500" />
                            </button>
                        </div>
                    </div>

                    {/* Social Network */}
                    <div className="mb-6">
                        <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                            <span className="w-1 h-6 bg-red-500 mr-3"></span>
                            Social Network
                        </h4>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <button className="px-4 py-3 bg-pink-500 text-white text-sm font-medium rounded hover:bg-pink-600 transition-colors flex items-center justify-center">
                                <Instagram className="w-4 h-4 mr-2" />
                                Instagram
                            </button>
                            <button className="px-4 py-3 bg-blue-400 text-white text-sm font-medium rounded hover:bg-blue-500 transition-colors flex items-center justify-center">
                                <Twitter className="w-4 h-4 mr-2" />
                                Twitter
                            </button>
                        </div>
                    </div>

                    {/* Copyright & Links */}
                    <div className="pt-6 border-t border-gray-200">
                        <div className="text-xs text-gray-500 text-center space-y-2">
                            <div>All Copyright © 2022 Reserved</div>
                            <div>
                                <span className="hover:text-red-500 cursor-pointer">Privacy Policy</span>
                                <span className="mx-2">|</span>
                                <span className="hover:text-red-500 cursor-pointer">Terms & Conditions</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;