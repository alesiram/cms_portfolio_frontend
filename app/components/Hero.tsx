import { Link } from "react-router";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import BlinkingBar from "./BlinkingBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";

type HeroProps = {
  name?: string;
  title?: string;
  text?: string;
  image?: string;
};

const Hero = ({
  name = "Marisela",
  title = "Full-Stack Developer",
  text = "I build responsive web applications with modern tools and enjoy creating projects that are both practical and user-friendly.",
  image = "https://i.imgur.com/66bJTJp.png",
}: HeroProps) => {
  return (
    <header className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-7 items-center">
          <div className="text-center md:text-left">
            <p className="text-pink-400 font-medium mb-3">Hello, I’m</p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4 flex items-end justify-center md:justify-start gap-1">
              <span>{name}</span>
              <BlinkingBar />
            </h1>

            <h2 className="text-2xl md:text-3xl text-gray-300 mb-4">{title}</h2>

            <p className="text-lg text-gray-400 max-w-xl mb-8">{text}</p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
              <a
                href="https://github.com/alesiram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-white hover:text-pink-400 transition"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/mariselavasquez/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-white hover:text-pink-400 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Link
                to="/projects"
                className="bg-pink-600 text-white px-6 py-3 rounded-md hover:bg-pink-700 transition"
              >
                View Projects
              </Link>

              <Link
                to="/contact"
                className="border border-pink-500 text-pink-400 px-6 py-3 rounded-md hover:bg-pink-600 hover:text-white transition"
              >
                Contact Me
              </Link>
            </div>
            <Box sx={{ mt: 1 }}>
              <Button
                href={`${import.meta.env.BASE_URL}PDF_Files/resume.pdf`}
                target="_blank"
                variant="contained"
                color="success"
                endIcon={<DownloadIcon />}
              >
                Download Resume
              </Button>
            </Box>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src={image}
              alt={`${name} portrait`}
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-cyan-400 shadow-xl"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
