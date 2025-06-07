import Slider from "react-slick";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import fakeImg from "../../../Photos/1483382.jpg";
import ReactStars from "react-stars";
import { Link } from "react-router-dom";

export const HomeMovies = ({ data, items, moviesHomeLoading }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplaySpeed: 50,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="w-full relative z-10 px-4 md:px-8 mt-[-3rem]">
      {moviesHomeLoading ? (
        <div className="flex h-[50vh] w-full justify-center items-center">
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 rounded-full border-t-4 border-b-4 border-cyan-400 animate-spin"></div>
            <div className="absolute inset-2 rounded-full border-t-4 border-b-4 border-blue-600 animate-spin-reverse delay-150"></div>
          </div>
        </div>
      ) : (
        <div className="w-full container mx-auto">
          <div className="flex justify-between items-end mb-8 mt-12 bg-gray-900/50 backdrop-blur-md p-6 rounded-3xl border border-gray-800">
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                Trending Movies
              </h1>
              <p className="text-gray-400 mt-2 text-sm md:text-base">
                What people are watching right now
              </p>
            </div>
            <Link to="/movies" className="hidden sm:block">
              <Button
                variant="text"
                className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10 flex items-center gap-2"
              >
                View All
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Button>
            </Link>
          </div>

          <div className="px-2 md:px-6 mb-16">
            <Slider {...settings} className="trending-slider">
              {data.map((item, i) => (
                <div className="px-3" key={i}>
                  <Link to={`/movies/${item.id}/title/${item.original_title}`}>
                    <div className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg shadow-black/40">
                      <img
                        src={`https://media.themoviedb.org/t/p/w500${item.backdrop_path}`}
                        alt={item.title}
                        className="w-full h-48 md:h-56 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 p-4 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-white font-bold text-lg truncate drop-shadow-md">
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                          <span className="bg-cyan-500 text-black text-xs font-bold px-2 py-1 rounded">
                            Movie
                          </span>
                          <span className="text-sm font-medium text-gray-300 flex items-center gap-1">
                            <svg
                              className="w-4 h-4 text-yellow-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.176 0l-3.38 2.454c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                            </svg>
                            {item.vote_average?.toFixed(1)}
                          </span>
                        </div>
                      </div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-cyan-500/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300">
                        <svg
                          className="w-6 h-6 text-white ml-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </Slider>
          </div>

          <div className="flex justify-between items-center mb-10 mt-20 border-b border-gray-800 pb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100 border-l-4 border-cyan-400 pl-4">
              Top Rated{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Movies
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-20">
            {items &&
              items.map((item, i) => (
                <Card
                  className="bg-gray-900/80 backdrop-blur border border-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-cyan-500/20 group transition-all duration-300 transform hover:-translate-y-2"
                  key={i}
                >
                  <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 rounded-none w-full h-[28rem] relative"
                  >
                    {item.poster_path ? (
                      <Link
                        to={`/movies/${item.id}/title/${item.original_title}`}
                      >
                        <img
                          src={`https://media.themoviedb.org/t/p/w500${item.poster_path}`}
                          alt={item.title}
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                        />
                      </Link>
                    ) : (
                      <img
                        src={fakeImg}
                        alt="logo"
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-gray-700 flex items-center gap-1">
                      <svg
                        className="w-4 h-4 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.176 0l-3.38 2.454c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                      </svg>
                      <span className="text-white font-bold">
                        {item.vote_average?.toFixed(1)}
                      </span>
                    </div>
                    {/* Add a fade gradient to bottom of image */}
                    <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-gray-900/90 to-transparent"></div>
                  </CardHeader>

                  <CardBody className="p-6 relative">
                    <Typography
                      variant="h4"
                      className="text-white font-bold truncate mb-2 hover:text-cyan-400 transition-colors"
                      title={item.title}
                    >
                      <Link
                        to={`/movies/${item.id}/title/${item.original_title}`}
                      >
                        {item.title}
                      </Link>
                    </Typography>

                    <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                      <span className="flex items-center gap-1.5 bg-gray-800/80 px-2.5 py-1 rounded border border-gray-700">
                        <svg
                          className="w-4 h-4 text-cyan-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 7V3M16 7V3M4 11H20M5 21H19A2 2 0 0021 19V7A2 2 0 0019 5H5A2 2 0 003 7V19A2 2 0 005 21Z"
                          />
                        </svg>
                        {item.release_date
                          ? item.release_date.substring(0, 4)
                          : "Year"}
                      </span>
                      <span className="flex items-center gap-1.5 uppercase font-medium bg-gray-800/80 px-2.5 py-1 rounded border border-gray-700">
                        {item.original_language}
                      </span>
                    </div>

                    <Link
                      to={`/movies/${item.id}/title/${item.original_title}`}
                    >
                      <Button className="w-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/50 hover:bg-cyan-500 hover:text-black transition-all shadow-none hover:shadow-lg hover:shadow-cyan-500/30 rounded-xl py-3 flex justify-center items-center gap-2">
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
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        View Details
                      </Button>
                    </Link>
                  </CardBody>
                </Card>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default HomeMovies;
