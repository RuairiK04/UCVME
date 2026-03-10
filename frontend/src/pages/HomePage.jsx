import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function HomePage() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Navbar />
            
            {/* Hero Section */}
            <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-7xl w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left side - Text */}
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                                Welcome to{' '}
                                <span className="text-[#0770e3]">
                                    UCVME
                                </span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8">
                                Share your professional expertise with the world
                            </p>
                            <button className="px-8 py-4 bg-[#0770e3] hover:bg-[#055bb5] text-white text-lg font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-200">
                                Get Started
                            </button>
                        </div>

                        {/* Right side - Icon/Image */}
                        <div className="flex justify-center lg:justify-end">
                            <div className="relative">
                                {/* Main card container */}
                                <div className="relative w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-br from-[#0770e3] to-[#055bb5] rounded-3xl flex items-center justify-center shadow-2xl">
                                    {/* Decorative floating cards */}
                                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-white rounded-2xl shadow-lg transform rotate-12"></div>
                                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/90 rounded-2xl shadow-lg transform -rotate-6"></div>
                                    
                                    {/* Center icon - Pencil/Design tool */}
                                    <svg className="w-32 h-32 sm:w-40 sm:h-40 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature Cards */}
                    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Feature 1 */}
                        <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-[#0770e3] rounded-xl flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Fast & Easy</h3>
                            <p className="text-gray-600 text-sm">Find the right person for the job</p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-[#0770e3] rounded-xl flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Over 100,000 daily users</h3>
                            <p className="text-gray-600 text-sm">UCVME is rated 1st for website of the year</p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-[#0770e3] rounded-xl flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Share Anywhere</h3>
                            <p className="text-gray-600 text-sm">Export and share your personal CV across all platforms</p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
