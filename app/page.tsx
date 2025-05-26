export default function MediaPage() {
  return (
    <div className="flex h-screen p-4 bg-gray-100">
      <div className="w-1/2 h-full pr-2">
        <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/largerminime.png"
            alt="Left Side"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="w-1/2 h-full pl-2 flex flex-col">
        <div className="h-1/2 mb-2 rounded-2xl overflow-hidden shadow-lg bg-white">
          <iframe
            src="https://docs.google.com/presentation/d/1u2F9dbSZzd14WiYGAZrbvXYlgR2EtQkKTPUDzdTm9iI/embed"
            frameBorder="0"
            width="100%"
            height="100%" 
            allowFullScreen
          ></iframe>
        </div>

        <div className="h-1/2 rounded-2xl overflow-hidden shadow-lg bg-white">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
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
