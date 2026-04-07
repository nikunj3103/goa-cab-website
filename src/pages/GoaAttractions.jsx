import PageWrapper from "../components/PageWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// ✅ IMPORT IMAGES (MATCH YOUR FILES EXACTLY)
import baga from "../assets/places/baga.jpg";
import calangute from "../assets/places/calangute.webp";
import anjuna from "../assets/places/anjuna.jpg";
import vagator from "../assets/places/vagator.jpg";
import candolim from "../assets/places/candolim.jpg";
import colva from "../assets/places/colva.jpg";

import aguada from "../assets/places/aguada.jpg";
import chapora from "../assets/places/chapora.png";
import dudhsagar from "../assets/places/dudhsagar.avif";

import palolem from "../assets/places/palolem.jpg";
import arambol from "../assets/places/arambol.jpg";
import butterfly from "../assets/places/butterfly.jpg";
import reismagos from "../assets/places/reismagos.jpg";
import miramar from "../assets/places/miramar.jpg";

const GoaAttractions = () => {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const whatsappLink = (place) =>
    `https://wa.me/919823771051?text=Hi, I want to book a cab to ${place}`;

  // ✅ SAME DATA, ONLY IMAGES FIXED
  const places = [
    { name: "Baga Beach", img: baga, desc: "Famous for nightlife and water sports." },
    { name: "Calangute Beach", img: calangute, desc: "Queen of beaches in Goa with golden sands and vibrant energy." },
    { name: "Anjuna Beach", img: anjuna, desc: "Popular flea markets." },
    { name: "Vagator Beach", img: vagator, desc: "Cliffside sunset views." },
    { name: "Candolim Beach", img: candolim, desc: "Clean and peaceful beach." },
    { name: "Colva Beach", img: colva, desc: "Popular South Goa beach." },

    { name: "Fort Aguada", img: aguada, desc: "Historic Portuguese fort." },
    { name: "Chapora Fort", img: chapora, desc: "Iconic movie location." },
    { name: "Dudhsagar Falls", img: dudhsagar, desc: "Spectacular waterfall." },

    { name: "Palolem Beach", img: palolem, desc: "Scenic and calm." },
    { name: "Arambol Beach", img: arambol, desc: "Bohemian vibes." },
    { name: "Butterfly Beach", img: butterfly, desc: "Hidden paradise." },
    { name: "Reis Magos Fort", img: reismagos, desc: "Restored fort." },
    { name: "Miramar Beach", img: miramar, desc: "Near Panaji city." },
  ];

  return (
    <PageWrapper>

      {/* 🔙 BACK BUTTON */}
      <motion.button
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        onClick={() => navigate("/")}
        className="fixed top-24 left-6 z-50 
        w-12 h-12 flex items-center justify-center 
        rounded-full 
        bg-white/40 backdrop-blur-xl 
        border border-white/30 
        shadow-xl 
        hover:scale-110 transition"
      >
        ←
      </motion.button>

      <div className="px-6 py-10 max-w-7xl mx-auto">

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-center mb-12">
          Goa Attractions 🌴
        </h1>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">
          {places.map((place, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer rounded-2xl overflow-hidden shadow-xl group"
              onClick={() => setSelected(place)}
            >
              <div className="overflow-hidden">
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
              </div>

              <div className="p-4 bg-white/60 dark:bg-gray-900/60 backdrop-blur-lg">
                <h2 className="font-semibold">{place.name}</h2>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MODAL */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <motion.div
                className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-white/20"
                initial={{ scale: 0.8, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selected?.img}
                  alt={selected?.name}
                  className="w-full h-72 object-cover"
                />

                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2">
                    {selected?.name}
                  </h2>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {selected?.desc}
                  </p>

                  {/* 🚖 BOOK BUTTON */}
                  <div
                    onClick={() => navigate("/")}
                    className="block text-center bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 hover:scale-105 transition cursor-pointer"
                  >
                    🚖 Book Cab to {selected?.name}
                  </div>

                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

    </PageWrapper>
  );
};

export default GoaAttractions;