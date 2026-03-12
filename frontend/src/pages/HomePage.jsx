import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function HomePage() {
    return (
        <div className="min-h-screen bg-black flex flex-col">
            <Navbar />
            
            {/* Hero Section */}
            <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-7xl w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left side - Text */}
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                                Create Your{' '}
                                <span className="text-[#10b981]">
                                    Video CV
                                </span>
                            </h1>
                            <p className="text-xl sm:text-2xl text-gray-300 mb-4 leading-relaxed">
                                Show who you really are through personality-based video
                            </p>
                            <p className="text-lg text-gray-400 mb-8">
                                Your personal snapshot. Your story. Your unique way of connecting with the world.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <button className="px-8 py-4 bg-[#10b981] hover:bg-[#059669] text-white text-lg font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-200">
                                    Create Your Video CV
                                </button>
                                <button className="px-8 py-4 bg-transparent border-2 border-[#10b981] hover:bg-[#10b981] text-[#10b981] hover:text-white text-lg font-semibold rounded-full shadow-sm hover:shadow-md transition-all duration-200">
                                    Watch Demo
                                </button>
                            </div>
                        </div>

                        {/* Right side - Icon/Image */}
                        <div className="flex justify-center lg:justify-end">
                            <div className="relative">
                                {/* Main card container */}
                                <div className="relative w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-3xl flex items-center justify-center shadow-2xl">
                                    {/* Decorative floating cards */}
                                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-white rounded-2xl shadow-lg transform rotate-12"></div>
                                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/90 rounded-2xl shadow-lg transform -rotate-6"></div>
                                    
                                    {/* Center icon - Video camera representing video CV */}
                                    <svg className="w-32 h-32 sm:w-40 sm:h-40 text-white" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M4 6C4 4.89543 4.89543 4 6 4H14C15.1046 4 16 4.89543 16 6V18C16 19.1046 15.1046 20 14 20H6C4.89543 20 4 19.1046 4 18V6Z" />
                                        <path d="M18 8.5L21.5528 6.72361C22.2177 6.39116 23 6.87465 23 7.61803V16.382C23 17.1253 22.2177 17.6088 21.5528 17.2764L18 15.5V8.5Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature Cards */}
                    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Feature 1 */}
                        <div className="bg-gray-900 rounded-2xl p-6 hover:shadow-lg hover:shadow-green-500/20 transition-shadow border border-gray-800">
                            <div className="w-12 h-12 bg-[#10b981] rounded-xl flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">Video-First</h3>
                            <p className="text-gray-400 text-sm">Create personality-based videos that showcase the real you - not just words on paper</p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-gray-900 rounded-2xl p-6 hover:shadow-lg hover:shadow-green-500/20 transition-shadow border border-gray-800">
                            <div className="w-12 h-12 bg-[#10b981] rounded-xl flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">Your Personal Snapshot</h3>
                            <p className="text-gray-400 text-sm">Express your unique personality and let your authentic self shine through</p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-gray-900 rounded-2xl p-6 hover:shadow-lg hover:shadow-green-500/20 transition-shadow border border-gray-800">
                            <div className="w-12 h-12 bg-[#10b981] rounded-xl flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">Easy Sharing</h3>
                            <p className="text-gray-400 text-sm">Share your video CV instantly with a simple link - perfect for job applications and networking</p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
