import { useEffect, useState } from "react";
import {
  Navbar,
  Collapse,
  Button,
  
  Avatar,
} from "@material-tailwind/react";
import { BiMoviePlay } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  aboutMovie,
  aboutSearch,
  aboutSeries,
  delButSearch,
  getSearchMovies,
  getSearchSeries,
} from "../SystmeRdx/Slices/moviesSlices/searchMovies";
import { getMoviesPage } from "../SystmeRdx/Slices/moviesSlices/moviesSlice";

const Head = () => {
  const [openNav, setOpenNav] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const { moviesSearch, changeButtonMovieToSeries, seriesSearch } = useSelector(
    (state) => state.aboutSearchMovie,
  );

  const dispatch = useDispatch();

    // Initial theme check
  useEffect(() => {
  dispatch(getMoviesPage());
  document.documentElement.classList.add("dark");
}, [dispatch]);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
    dispatch(getSearchMovies(e.target.value));
    dispatch(getSearchSeries(e.target.value));
  };

const navList = (
  <ul className="flex flex-col lg:flex-row items-center gap-3 lg:gap-8">
    <li>
      <Link
        to="/"
        className="relative px-4 py-2 text-gray-300 font-semibold transition-all duration-300 hover:text-cyan-400 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
      >
        Home
      </Link>
    </li>

    <li>
      <Link
        to="/movies"
        className="relative px-4 py-2 text-gray-300 font-semibold transition-all duration-300 hover:text-cyan-400 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
      >
        Movies
      </Link>
    </li>

    <li>
      <Link
        to="/series"
        className="relative px-4 py-2 text-gray-300 font-semibold transition-all duration-300 hover:text-cyan-400 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
      >
        Series
      </Link>
    </li>
  </ul>
);

  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-cyan-500/10">
      <div className="container mx-auto flex flex-col items-center justify-center py-4">
        <div className="flex flex-col md:flex-row items-center gap-3 w-full md:w-[600px]">
          <div className="relative w-full">
            <input
              className={`w-full py-3 pl-12 pr-4 rounded-2xl bg-white/5 backdrop-blur-md text-white placeholder:text-gray-400 border ${
                changeButtonMovieToSeries === "serie"
                  ? "border-green-500"
                  : "border-cyan-500"
              } focus:outline-none focus:ring-2 transition-all duration-300`}
              placeholder={
                changeButtonMovieToSeries === "serie"
                  ? "Search Series ..."
                  : "Search Movies ..."
              }
              type="text"
              value={searchValue}
              onChange={handleSearchChange}
              name="search"
              autoComplete="off"
            />
            <FaSearch
              className={`absolute left-4 top-1/2 -translate-y-1/2 ${
                changeButtonMovieToSeries === "serie"
                  ? "text-green-500"
                  : "text-cyan-400"
              } text-lg`}
            />
          </div>
          <div className="flex gap-2 mt-2 md:mt-0">
            <Button
              size="sm"
              className={`rounded-xl px-5 py-3 font-bold transition-all duration-300 ${
                changeButtonMovieToSeries !== "serie"
                  ? "bg-cyan-500 shadow-lg shadow-cyan-500/30 scale-105"
                  : "bg-slate-800 hover:bg-slate-700"
              }`}
              onClick={() => dispatch(aboutMovie())}
            >
              Movies
            </Button>
            <Button
              size="sm"
              className={`rounded-xl px-5 py-3 font-bold transition-all duration-300 ${
                changeButtonMovieToSeries === "serie"
                  ? "bg-green-600 shadow-lg shadow-green-600/30 scale-105"
                  : "bg-slate-800 hover:bg-slate-700"
              }`}
              onClick={() => dispatch(aboutSeries())}
            >
              Series
            </Button>
            {searchValue && (
              <Button
                size="sm"
                variant="text"
                className="rounded-xl text-red-400 hover:bg-red-500/10 font-bold px-4 py-2"
                onClick={() => {
                  setSearchValue("");
                  dispatch(delButSearch());
                }}
              >
                Clear
              </Button>
            )}
         
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <Navbar className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl shadow-cyan-500/10 w-full max-w-4xl overflow-hidden">
          <div className="w-full flex flex-col items-center justify-center py-3 px-4">
            <Link
              to="/"
              className="flex items-center gap-3 text-3xl font-black tracking-widest"
            >
              <span className="text-cyan-400 text-5xl">
                <BiMoviePlay />
              </span>
              <span>
                WATCH
                <span className="text-blue-500 dark:text-[#0DCAF0]">WORLD</span>
              </span>
            </Link>

            <div className="w-full flex justify-center items-center mt-2">
              <div className="hidden lg:flex w-full justify-center">
                {navList}
              </div>
            </div>
          </div>
          {/* Mobile Nav */}
          <Collapse open={openNav}>
            <div className="block lg:hidden bg-white dark:bg-[#23272f] px-4 py-4 rounded-b-2xl">
              {navList}
            </div>
          </Collapse>
        </Navbar>
      </div>
      {/* Search Results Dropdown */}
      {searchValue && (
        <div className="absolute z-40 w-full max-w-lg left-1/2 -translate-x-1/2 mt-2">
          <div className="rounded-2xl bg-white dark:bg-[#23272f] shadow-lg p-4 max-h-96 overflow-auto border border-blue-500/30 dark:border-[#0DCAF0]/30 transition-colors duration-300">
            {(changeButtonMovieToSeries === "serie"
              ? seriesSearch
              : moviesSearch
            )?.length > 0 ? (
              (changeButtonMovieToSeries === "serie"
                ? seriesSearch
                : moviesSearch
              ).map((item, i) => (
                <Link
                  key={i}
                  to={
                    changeButtonMovieToSeries === "serie"
                      ? `/series/${item.id}/title/${item.name}`
                      : `/movies/${item.id}/title/${item.title}`
                  }
                  className="flex items-center gap-3 hover:bg-blue-500/10 dark:hover:bg-[#0DCAF0]/10 rounded-lg p-2 transition"
                  onClick={() => {
                    dispatch(aboutSearch());
                    setSearchValue("");
                  }}
                >
                  <Avatar
                    src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${item?.poster_path}`}
                    alt="avatar"
                    className="w-10 h-14"
                  />
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">
                      {changeButtonMovieToSeries === "serie"
                        ? item?.name
                        : item?.title}
                    </div>
                    <div className="text-xs text-blue-500 dark:text-[#0DCAF0]">
                      {item?.release_date || item?.first_air_date
                        ? new Date(
                            item?.release_date || item?.first_air_date,
                          ).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })
                        : ""}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {item?.original_language?.toUpperCase()}
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="text-gray-500 dark:text-gray-400 text-center py-6">
                No results found.
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Head;
