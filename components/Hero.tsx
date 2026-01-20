"use client";

export default function Hero() {
  const scrollToContent = () => {
    const element = document.getElementById("stats");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 video-container">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/indianapolis-poster.jpg"
        >
          <source src="/indianaaaaaaa.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light tracking-wide animate-fade-in mb-4">
          Maximize Your Investment
        </h2>
        <p className="text-lg md:text-xl font-light tracking-wide max-w-2xl animate-slide-up opacity-90">
          Expert 1031 Exchange Services in Indianapolis
        </p>
      </div>

      {/* Scroll Down Button */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 group"
        aria-label="Scroll to content"
      >
        <div className="w-12 h-12 rounded-full bg-teal flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg">
          <svg
            className="w-5 h-5 text-white animate-bounce"
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
        </div>
      </button>
    </section>
  );
}
