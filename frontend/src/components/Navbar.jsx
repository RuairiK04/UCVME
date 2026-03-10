import { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleProfile = () => setIsProfileOpen(!isProfileOpen);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Create', href: '#create' },
        { name: 'Designs', href: '#designs' },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <a href="#home" className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-[#0770e3] rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">UC</span>
                            </div>
                            <span className="text-gray-900 font-bold text-xl hidden sm:block">
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
                                className="text-gray-700 hover:text-[#0770e3] px-4 py-2 text-sm font-semibold transition-colors duration-200"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Right side buttons */}
                    <div className="flex items-center space-x-2">

                        {/* Sign In Button */}
                        <button className="hidden md:block px-4 py-2 text-[#0770e3] font-semibold hover:bg-gray-50 rounded-lg transition-colors">
                            Sign in
                        </button>

                        {/* Profile Dropdown */}
                        <div className="relative hidden md:block">
                            <button
                                onClick={toggleProfile}
                                className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-50 rounded-lg transition-colors"
                            >
                                <div className="w-8 h-8 bg-[#0770e3] rounded-full flex items-center justify-center">
                                    <span className="text-white text-sm font-semibold">JD</span>
                                </div>
                            </button>

                            {/* Profile Dropdown Menu */}
                            {isProfileOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-2 border border-gray-200">
                                    <a href="#profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                                        Your Profile
                                    </a>
                                    <a href="#settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                                        Settings
                                    </a>
                                    <a href="#dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                                        Dashboard
                                    </a>
                                    <hr className="my-1 border-gray-200" />
                                    <a href="#logout" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-50 transition-colors">
                                        Sign out
                                    </a>
                                </div>
                            )}
                        </div>

                        {/* Mobile menu button */}
                        <button
                            onClick={toggleMenu}
                            className="md:hidden text-gray-700 hover:bg-gray-50 p-2 rounded-lg transition-colors"
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

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200">
                        <div className="space-y-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="block text-gray-700 hover:text-[#0770e3] hover:bg-gray-50 px-3 py-2 rounded-lg text-base font-medium transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <hr className="my-2 border-gray-200" />
                            <a href="#profile" className="block text-gray-700 hover:bg-gray-50 px-3 py-2 rounded-lg text-base font-medium transition-colors">
                                Your Profile
                            </a>
                            <a href="#settings" className="block text-gray-700 hover:bg-gray-50 px-3 py-2 rounded-lg text-base font-medium transition-colors">
                                Settings
                            </a>
                            <a href="#dashboard" className="block text-gray-700 hover:bg-gray-50 px-3 py-2 rounded-lg text-base font-medium transition-colors">
                                Dashboard
                            </a>
                            <hr className="my-2 border-gray-200" />
                            <a href="#logout" className="block text-red-600 hover:bg-gray-50 px-3 py-2 rounded-lg text-base font-medium transition-colors">
                                Sign out
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}