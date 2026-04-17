import { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.png";

const quotes = [
  "Driven by trust, powered by professionalism. ",
  "Safe rides, every time. ",
  " We drive, you relax.",
  " Your journey is our responsibility.",
  "Reliable drivers for a smoother ride.  ",
  " Professional drivers, premium service.",
  " Your comfort is our priority. ",
  " Turning every trip into a safe experience.",
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);

  const headerRef = useRef(null);
  const btnRef = useRef(null);

  // scroll shrink
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // rotating quotes
  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // 🎯 MOUSE PARALLAX
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;

      if (headerRef.current) {
        headerRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // 🧲 MAGNETIC BUTTON
  const handleMouseMoveBtn = (e) => {
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    btnRef.current.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const handleMouseLeaveBtn = () => {
    btnRef.current.style.transform = `translate(0px, 0px)`;
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 overflow-hidden
      ${
        scrolled
          ? "backdrop-blur-2xl bg-white/60 dark:bg-black/40 py-2 shadow-xl"
          : "backdrop-blur-md bg-white/30 dark:bg-black/20 py-4"
      }`}
    >
      {/* 🌈 GRADIENT GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[300px] h-[300px] bg-blue-400 opacity-20 blur-3xl animate-pulse left-0 top-0"></div>
        <div className="absolute w-[300px] h-[300px] bg-green-400 opacity-20 blur-3xl animate-pulse right-0 bottom-0"></div>
      </div>

      {/* ✨ PARTICLES */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <img
            src={logo}
            alt="Goa Cab"
            className={`rounded-full shadow-lg transition-all duration-500 group-hover:scale-110
              ${scrolled ? "w-10 h-10" : "w-14 h-14"}`}
          />

          <div>
            <h1 className="font-semibold text-lg group-hover:text-blue-500 transition">
              Goa Cab
            </h1>
            <p className="text-xs text-gray-500">Candolim, North Goa</p>
          </div>
        </div>

        {/* QUOTES */}
        <div className="hidden md:block text-center">
          <p className="text-sm md:text-base font-medium text-gray-700 dark:text-gray-200">
            {quotes[quoteIndex]}
          </p>
        </div>

        {/* 🧲 MAGNETIC BUTTON */}
      <a
  href={`https://wa.me/918007090230?text=${encodeURIComponent(
    "Hi. I am interested for cab booking!"
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  className="
    relative
    px-6 py-2.5
    rounded-full
    text-white font-semibold
    bg-[var(--primary)]
    shadow-[0_10px_30px_rgba(18,62,92,0.4)]
    
    hover:bg-[var(--primary-hover)]
    hover:scale-110
    hover:shadow-[0_15px_40px_rgba(18,62,92,0.6)]
    
    transition-all duration-300
    overflow-hidden
  "
>
  <span className="relative z-10 flex items-center gap-2">
    <span className="animate-pulse">🚕</span> Book Now
  </span>

  <span className="
    absolute inset-0
    bg-gradient-to-r from-white/20 to-transparent
    opacity-0 hover:opacity-100
    transition duration-500
  "></span>
</a>
      </div>
    </header>
  );
};

export default Header;