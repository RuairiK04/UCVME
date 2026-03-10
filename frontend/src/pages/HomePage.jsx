import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function HomePage() {
    return (
        <div className="min-h-screen bg-slate-950 flex flex-col">
            <Navbar />
            
            {/* Hero Section */}
            <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left side - Text */}
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                                Welcome to
                                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-2">
                                    UCVME
                                </span>
                            </h1>
                            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200">
                                Get Started
                            </button>
                        </div>

                        {/* Right side - Icon/Image */}
                        <div className="flex justify-center lg:justify-end">
                            <div className="relative">
                                {/* Gradient background blur effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl rounded-full"></div>
                                
                                {/* Main icon container */}
                                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl flex items-center justify-center border border-slate-700 shadow-2xl">
                                    {/* Decorative elements */}
                                    <div className="absolute top-8 right-8 w-16 h-16 bg-blue-500/20 rounded-lg rotate-12"></div>
                                    <div className="absolute bottom-8 left-8 w-20 h-20 bg-purple-500/20 rounded-lg -rotate-12"></div>
                                    
                                    {/* Center icon - Graduation cap representing education */}
                                    <svg className="w-32 h-32 sm:w-40 sm:h-40 text-gradient" viewBox="0 0 24 24" fill="none">
                                        <defs>
                                            <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#3b82f6" />
                                                <stop offset="50%" stopColor="#a855f7" />
                                                <stop offset="100%" stopColor="#ec4899" />
                                            </linearGradient>
                                        </defs>
                                        <path 
                                            d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" 
                                            fill="url(#iconGradient)"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
