export default function MediaPage() {
  return (
    <div className="flex flex-col md:flex-row h-screen p-4 bg-gray-100">
      {/* Left Image: visible only on md and up */}
      <div className="hidden md:block w-full md:w-1/2 h-64 md:h-full pr-0 md:pr-2">
        <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/largerminime.png"
            alt="Left Side"
            className="w-full h-full object-cover"
          />
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
