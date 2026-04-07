import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import car1 from "../assets/car1.jpg";
import car2 from "../assets/car2.jpg";
import car3 from "../assets/car3.jpg";

const About = () => {
  const images = [car1, car2, car3];

  const quotes = [
    "Your comfort is our priority 🚕",
    "Explore Goa with ease & luxury 🌴",
    "10+ years of trusted cab service",
    "Safe rides. Happy journeys."
  ];

  const headline = "Your Trusted Driving Partner in Goa";

  const [index, setIndex] = useState(0);
  const [typedText, setTypedText] = useState("");

  // background image slider
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // typing animation
  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setTypedText(headline.slice(0, i));
      i++;
      if (i > headline.length) clearInterval(typing);
    }, 60);

    return () => clearInterval(typing);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">

      {/* BACKGROUND IMAGES */}
      {images.map((img, i) => (
        <motion.img
          key={i}
          src={img}
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{
            scale: i === index ? 1 : 1.2,
            opacity: i === index ? 1 : 0
          }}
          transition={{ duration: 1.5 }}
          className="absolute w-full h-full object-cover"
        />
      ))}

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* TOP CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20">

        {/* ✍️ TYPING HEADLINE */}
        <h1 className="text-white text-3xl md:text-5xl font-bold mb-6">
          <span className="
            bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]
            bg-clip-text text-transparent
          ">
            {typedText}
          </span>
          <span className="animate-pulse">|</span>
        </h1>

        {/* QUOTES */}
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-white text-lg md:text-2xl max-w-2xl mb-10"
          >
            {quotes[index]}
          </motion.p>
        </AnimatePresence>

      </div>

      {/* CONTENT SECTION */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pb-20">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            bg-white/10 backdrop-blur-xl
            border border-white/20
            rounded-2xl
            p-6 md:p-10
            text-gray-200
            shadow-2xl
            space-y-6
          "
        >

          <p>
            Based in the <span className="text-white font-semibold">heart of Goa</span>, we specialize in providing 
            <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent font-semibold">
              {" "}professional and reliable car driver services
            </span>.
          </p>

          <p>
            Whether you’re exploring the 
            <span className="text-white font-semibold"> vibrant beaches of North Goa</span> or the 
            <span className="text-white font-semibold"> peaceful shores of South Goa</span>, we ensure every journey is 
            <span className="text-[var(--accent)] font-semibold"> smooth and enjoyable</span>.
          </p>

          <p>
            Our drivers are 
            <span className="text-white font-semibold"> experienced and well-trained</span>, with deep knowledge of 
            <span className="text-[var(--accent)] font-semibold"> Goa’s routes, traffic and hidden gems</span>.
          </p>

          <p>
            From popular destinations to offbeat locations, we make sure you travel 
            <span className="text-white font-semibold"> safely, comfortably and on time</span>.
          </p>

          <p>
            We offer 
            <span className="text-[var(--accent)] font-semibold"> flexible services</span> including hourly hire, full-day bookings, airport transfers and sightseeing tours.
          </p>

          <p>
            Whether you're a tourist or a local, we provide a 
            <span className="text-white font-semibold"> dependable and stress-free experience</span>.
          </p>

          <p>
            <span className="text-[var(--accent)] font-semibold">Safety and customer satisfaction</span> are our top priorities.
          </p>

          <p>
            With a strong focus on 
            <span className="text-white font-semibold"> trust, convenience and local expertise</span>, 
            we aim to be your go-to driving partner — so you can 
            <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent font-semibold">
              {" "}sit back, relax and enjoy the ride
            </span>.
          </p>

        </motion.div>

      </div>

      {/* FLOATING BUTTON */}
      {/* <a
        href="https://wa.me/919823771051"
        target="_blank"
        rel="noopener noreferrer"
        className="
          fixed bottom-8 right-6
          bg-[var(--primary)]
          text-white px-6 py-3 rounded-full
          shadow-xl hover:scale-110 transition
        "
      >
        Book Now 💬
      </a> */}

    </div>
  );
};

export default About;