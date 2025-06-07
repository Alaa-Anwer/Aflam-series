import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const HomeHeader = () => {
  return (
    <div className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden mb-16 rounded-b-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
      {/* Background Gradient & Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-gray-900 to-black z-0"></div>
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent z-0 blur-3xl"></div>

      {/* Overlay Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-6 drop-shadow-lg tracking-tight">
          Discover The Best
          <br className="hidden md:block" /> Movies & Series
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-10 font-light max-w-2xl leading-relaxed">
          Unlimited entertainment, top-rated movies, trending series and much
          more. Dive into the world of cinema with a single click.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full sm:w-auto">
          <Link to="/movies">
            <Button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white rounded-full px-8 py-4 shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
              Explore Movies
            </Button>
          </Link>
          <Link to="/series">
            <Button
              variant="outlined"
              className="flex items-center gap-2 border-2 border-gray-500 text-gray-200 hover:border-cyan-400 hover:text-cyan-400 rounded-full px-8 py-4 transition-all duration-300 bg-black/30 backdrop-blur-sm"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              Browse Series
            </Button>
          </Link>
        </div>
      </div>

      {/* Bottom Fade out */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-10"></div>
    </div>
  );
};

export default HomeHeader;
