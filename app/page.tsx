import { LuLink } from "react-icons/lu";

export default function MediaPage() {
  return (
    <div className="flex flex-col md:flex-row h-screen p-4 bg-gray-100">
      {/* Left Side: image (hidden on small screens) + donation link */}
      <div className="w-full md:w-1/2 md:pr-2 flex flex-col space-y-4 mb-4 md:mb-0">
        {/* Image */}
        <div className="hidden md:block w-full h-64 md:h-full rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/largerminime.png"
            alt="Left Side"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Donation Link Box */}
        <div className="rounded-2xl shadow-lg bg-white p-4 text-center">
          <a
            href="https://gofund.me/8db9f3ca"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-lg inline-flex items-center justify-center gap-2"
          >
            <LuLink className="text-xl" />
            <span className="font-bold">Tip  us by supporting robotics in Uganda — donate here!</span>
          </a>
        </div>
      </div>

      {/* Right Side: slides + video */}
      <div className="w-full md:w-1/2 h-full flex flex-col space-y-4 md:pl-2">
        {/* Slides */}
        <div className="flex-1 rounded-2xl overflow-hidden shadow-lg bg-white">
          <iframe
            src="https://docs.google.com/presentation/d/1u2F9dbSZzd14WiYGAZrbvXYlgR2EtQkKTPUDzdTm9iI/embed"
            frameBorder="0"
            width="100%"
            height="100%"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video */}
        <div className="flex-1 rounded-2xl overflow-hidden shadow-lg bg-white">
          <iframe
            src="https://www.youtube.com/embed/F8KEMP-Q4tQ"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
