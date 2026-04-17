import { useState } from "react";
import { useNavigate } from "react-router-dom";

// ✅ IMAGES
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

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    fromDate: "",
    toDate: "",
    stay: "",
    pickup: "",
    drop: "",
    pax: "",
    vehicle: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ WHATSAPP MESSAGE
  const getWhatsAppLink = () => {
    const msg = `Hi, I want to book a cab 🚖

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}

From: ${form.fromDate}
To: ${form.toDate}

Pickup: ${form.pickup}
Drop: ${form.drop}

Stay: ${form.stay}
Pax: ${form.pax}
Vehicle: ${form.vehicle}`;

    return `https://wa.me/918007090230?text=${encodeURIComponent(msg)}`;
  };

  // ✅ EMAIL ENQUIRY
  const handleEnquiry = () => {
    const subject = "Cab Booking Enquiry";
    const body = `Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}

From: ${form.fromDate}
To: ${form.toDate}

Pickup: ${form.pickup}
Drop: ${form.drop}

Stay: ${form.stay}
Pax: ${form.pax}
Vehicle: ${form.vehicle}`;

    window.location.href = `mailto:booking@goacabcandolim.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const places = [
    { name: "Baga Beach", img: baga },
    { name: "Calangute Beach", img: calangute },
    { name: "Fort Aguada", img: aguada },
    { name: "Anjuna Beach", img: anjuna },
    { name: "Vagator Beach", img: vagator },
    { name: "Dudhsagar Falls", img: dudhsagar },
    { name: "Chapora Fort", img: chapora },
    { name: "Colva Beach", img: colva },
    { name: "Candolim Beach", img: candolim },
  ];

  return (
    <div className="min-h-screen px-4 md:px-10 py-6 bg-gradient-to-br from-blue-100 via-white to-blue-200">

      <div className="grid md:grid-cols-2 gap-8 mt-20">

        {/* FORM */}
        <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 shadow-xl">

          <h2 className="text-xl font-semibold mb-4">Book Your Ride</h2>

          <div className="space-y-3">

            <input name="name" placeholder="Name" className="input" onChange={handleChange} />
            <input name="phone" placeholder="Contact Number" className="input" onChange={handleChange} />
            <input name="email" placeholder="Email ID" className="input" onChange={handleChange} />

            <input name="fromDate" type="date" className="input" onChange={handleChange} />
            <input name="toDate" type="date" className="input" onChange={handleChange} />

            <input name="stay" placeholder="Stay Address in Goa" className="input" onChange={handleChange} />
            <input name="pickup" placeholder="Pickup Location" className="input" onChange={handleChange} />
            <input name="drop" placeholder="Drop Location" className="input" onChange={handleChange} />

            <input name="pax" type="number" placeholder="Number of Pax" className="input" onChange={handleChange} />

            <select name="vehicle" className="input" onChange={handleChange}>
              <option value="">Select Vehicle Type</option>
              <option>4 Seater</option>
              <option>6 Seater</option>
              <option>Caravan</option>
            </select>

            {/* BUTTONS */}
            <div className="flex gap-3 mt-3">

              <a
                href={getWhatsAppLink()}
                target="_blank"
                className="w-1/2 text-center bg-[#0B3C5D] text-white py-3 rounded-full hover:bg-[#072B44] transition"
              >
                🚖 Book Now
              </a>

              <button
                onClick={handleEnquiry}
                className="w-1/2 bg-[#0B3C5D] text-white py-3 rounded-full hover:bg-[#072B44] transition"
              >
                Enquire Now
              </button>

            </div>

          </div>
        </div>

        {/* PLACES GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

          {places.map((place, i) => (
            <div
              key={i}
              onClick={() => navigate("/goa-attractions")}
              className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl cursor-pointer"
            >
              <img src={place.img} className="h-60 w-full object-cover" />
              <div className="absolute bottom-2 left-2 text-white font-semibold text-sm">
                {place.name}
              </div>
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
              <p>📞 8007090230</p>
              <p>📧 booking@goacabcandolim.com</p>
              <p>📍 Candolim, Goa</p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Home;