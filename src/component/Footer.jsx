import { Typography } from "@material-tailwind/react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-700">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <Typography className="text-lg font-semibold tracking-wider text-gray-300">
          © 2025 WATCH WORLD
        </Typography>

        <ul className="flex flex-wrap justify-center gap-6">
          <li>
            <Typography className="cursor-pointer text-gray-400 transition-all duration-300 hover:text-blue-400 hover:scale-105">
              About Us
            </Typography>
          </li>

          <li>
            <Typography className="cursor-pointer text-gray-400 transition-all duration-300 hover:text-blue-400 hover:scale-105">
              Terms Of Use
            </Typography>
          </li>

          <li>
            <Typography className="cursor-pointer text-gray-400 transition-all duration-300 hover:text-blue-400 hover:scale-105">
              Privacy
            </Typography>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
