import { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleProfile = () => setIsProfileOpen(!isProfileOpen);
    const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Create', href: '#create' },
        { name: 'Designs', href: '#designs' },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <a href="#home" className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                                <span className="text-white font-bold text-xl">UC</span>
                            </div>
                            <span className="text-white font-bold text-xl hidden sm:block">
                                UCVME
                            </span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-300 hover:text-white hover:bg-slate-800 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Right side buttons */}
                    <div className="flex items-center space-x-3">
                        {/* Search Button */}
                        <button
                            onClick={toggleSearch}
                            className="text-gray-300 hover:text-white hover:bg-slate-800 p-2 rounded-lg transition-all duration-200"
                            aria-label="Search"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>

                        {/* Notifications */}
                        <button
                            className="relative text-gray-300 hover:text-white hover:bg-slate-800 p-2 rounded-lg transition-all duration-200"
                            aria-label="Notifications"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                        </button>

                        {/* Profile Dropdown */}
                        <div className="relative hidden md:block">
                            <button
                                onClick={toggleProfile}
                                className="flex items-center space-x-2 text-gray-300 hover:text-white hover:bg-slate-800 px-3 py-2 rounded-lg transition-all duration-200"
                            >
                                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                                    <span className="text-white text-sm font-medium">JD</span>
                                </div>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Profile Dropdown Menu */}
                            {isProfileOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-slate-800 rounded-lg shadow-xl py-1 border border-slate-700 animate-fadeIn">
                                    <a href="#profile" className="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-white transition-colors">
                                        Your Profile
                                    </a>
                                    <a href="#settings" className="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-white transition-colors">
                                        Settings
                                    </a>
                                    <a href="#dashboard" className="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-white transition-colors">
                                        Dashboard
                                    </a>
                                    <hr className="my-1 border-slate-700" />
                                    <a href="#logout" className="block px-4 py-2 text-sm text-red-400 hover:bg-slate-700 hover:text-red-300 transition-colors">
                                        Sign out
                                    </a>
                                </div>
                            )}
                        </div>

                        {/* Mobile menu button */}
                        <button
                            onClick={toggleMenu}
                            className="md:hidden text-gray-300 hover:text-white hover:bg-slate-800 p-2 rounded-lg transition-all duration-200"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Search Bar */}
                {isSearchOpen && (
                    <div className="py-4 animate-fadeIn">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search courses, resources, or topics..."
                                className="w-full bg-slate-800 text-white placeholder-gray-400 border border-slate-700 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                autoFocus
                            />
                            <svg className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                )}

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 animate-fadeIn">
                        <div className="space-y-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="block text-gray-300 hover:text-white hover:bg-slate-800 px-3 py-2 rounded-lg text-base font-medium transition-all duration-200"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <hr className="my-2 border-slate-700" />
                            <a href="#profile" className="block text-gray-300 hover:text-white hover:bg-slate-800 px-3 py-2 rounded-lg text-base font-medium transition-all duration-200">
                                Your Profile
                            </a>
                            <a href="#settings" className="block text-gray-300 hover:text-white hover:bg-slate-800 px-3 py-2 rounded-lg text-base font-medium transition-all duration-200">
                                Settings
                            </a>
                            <a href="#dashboard" className="block text-gray-300 hover:text-white hover:bg-slate-800 px-3 py-2 rounded-lg text-base font-medium transition-all duration-200">
                                Dashboard
                            </a>
                            <hr className="my-2 border-slate-700" />
                            <a href="#logout" className="block text-red-400 hover:text-red-300 hover:bg-slate-800 px-3 py-2 rounded-lg text-base font-medium transition-all duration-200">
                                Sign out
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}