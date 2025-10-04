import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-red-950 text-white pt-16"
    >
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg')] bg-cover bg-center opacity-20"></div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow animate-fade-in">
          FitZone
        </h1>
        <p className="text-2xl md:text-3xl mb-4 text-red-500 font-semibold text-shadow">
          Your Fitness Journey Starts Here
        </p>
        <p className="text-lg md:text-xl mb-8 text-gray-300">
          Transform your body, elevate your mind, and achieve your fitness goals with our world-class facilities and expert trainers.
        </p>
        <a
          href="#membership"
          className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold btn-animate"
        >
          <span>Join Now</span>
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white opacity-70 hover:opacity-100">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
