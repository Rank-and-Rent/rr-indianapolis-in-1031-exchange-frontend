"use client";

export default function Hero() {
  const scrollToContent = () => {
    const element = document.getElementById("stats");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full pt-20">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute min-w-full min-h-full object-cover"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <source src="/indianaaaaaaa.mp4" type="video/mp4" />
        </video>
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Scroll Down Button - Teal flower/badge shape */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 group"
        aria-label="Scroll to content"
      >
        <div
          className="relative w-14 h-14 flex items-center justify-center bg-teal"
          style={{
            borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
          }}
        >
          <svg
            className="w-5 h-5 text-white"
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
