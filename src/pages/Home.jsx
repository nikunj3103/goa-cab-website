import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import Loader from "../components/Loader";

// ✅ IMPORT IMAGES (MATCH YOUR FILE TYPES EXACTLY)
import baga from "../assets/places/baga.jpg";
import calangute from "../assets/places/calangute.webp";
import aguada from "../assets/places/aguada.jpg";
import anjuna from "../assets/places/anjuna.jpg";
import vagator from "../assets/places/vagator.jpg";
import dudhsagar from "../assets/places/dudhsagar.avif";
import chapora from "../assets/places/chapora.png";
import colva from "../assets/places/colva.jpg";
import candolim from "../assets/places/candolim.jpg";

const Home = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [quoteIndex, setQuoteIndex] = useState(0);

  const quotes = [
    "Explore Goa with comfort 🚕",
    "Your journey, our priority 🌴",
    "Reliable rides across Goa",
    "Safe & smooth travel experience"
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return <Loader />;

  // ✅ PLACES DATA
  const places = [
    { name: "Baga Beach", img: baga },
    { name: "Calangute Beach", img: calangute },
    { name: "Fort Aguada", img: aguada },
    { name: "Anjuna Beach", img: anjuna },
    { name: "Vagator Beach", img: vagator },
    { name: "Dudhsagar Falls", img: dudhsagar },
    { name: "Chapora Fort", img: chapora },
    { name: "Colva Beach", img: colva },
    { name: "Candolim Beach", img: candolim }
  ];

  return (
    <div className="relative min-h-screen px-4 md:px-10 py-6 
    bg-gradient-to-br from-blue-100 via-white to-blue-200 
    dark:from-black dark:via-gray-900 dark:to-black overflow-hidden animate-fadeIn">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-30 top-10 left-10"></div>
        <div className="absolute w-72 h-72 bg-teal-300 rounded-full blur-3xl opacity-30 bottom-10 right-10"></div>
      </div>

      <div className="mt-20"></div>

      {/* MAIN GRID */}
      <div className="grid md:grid-cols-2 gap-8">

        {/* FORM */}
        <div className="bg-white/60 dark:bg-white/10 backdrop-blur-xl border border-white/30 shadow-xl rounded-2xl p-6">

          <h2 className="text-xl font-semibold mb-4">Book Your Ride</h2>

          <div className="space-y-3">
            <input placeholder="Name" className="input" />
            <input placeholder="Contact Number" className="input" />
            <input placeholder="Email ID" className="input" />
            <input type="date" className="input" />
            <input type="date" className="input" />
            <input placeholder="Stay Address in Goa" className="input" />
            <input placeholder="Pickup Location" className="input" />
            <input placeholder="Drop Location" className="input" />

            <a
              href="https://wa.me/919823771051"
              className="block text-center bg-[#0B3C5D] text-white py-3 rounded-full hover:bg-[#072B44] transition"
            >
              Book Now
            </a>
          </div>

        </div>

        {/* PLACES GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

          {places.map((place, i) => (
            <div
              key={i}
              onClick={() => navigate("/goa-attractions")}
              className="relative rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition group cursor-pointer"
            >
              <img
                src={place.img}
                alt={place.name}
                loading="lazy"
                className="
                  h-60 w-full object-cover
                  brightness-95 contrast-110 saturate-110
                  group-hover:scale-110
                  transition duration-700
                "
              />

              {/* PREMIUM OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              <p className="absolute bottom-2 left-2 text-white text-xs font-semibold">
                {place.name}
              </p>
            </div>
          ))}

        </div>

      </div>

      {/* FOOTER */}
      <div className="mt-12 flex justify-center">

        <div className="
          w-full max-w-4xl 
          bg-gradient-to-r from-[#0B3C5D] via-[#134E6F] to-[#0B3C5D] 
          text-white
          backdrop-blur-xl 
          border border-white/20 
          rounded-2xl 
          px-6 py-4 
          shadow-xl
        ">

          <div className="flex justify-between items-center flex-wrap gap-4 text-sm">

            <button
              onClick={() => navigate("/about")}
              className="px-4 py-2 rounded-full border border-white hover:bg-white hover:text-black transition"
            >
              About Us
            </button>

            <button
              onClick={() => navigate("/goa-attractions")}
              className="px-4 py-2 rounded-full border border-white hover:bg-white hover:text-black transition"
            >
              Goa Attractions
            </button>

            <div className="text-right text-xs md:text-sm">
              <p>📞 9823771051</p>
              <p>📧 info@yourdomain.com</p>
              <p>📍 Candolim, Goa</p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Home;