import PageWrapper from "../components/PageWrapper";
import { motion } from "framer-motion";

const places = [
  { name: "Baga Beach", desc: "Nightlife & water sports." },
  { name: "Calangute Beach", desc: "Queen of beaches." },
  { name: "Dudhsagar Falls", desc: "Famous waterfall." },
  { name: "Fort Aguada", desc: "Historic fort." },
  { name: "Anjuna Beach", desc: "Flea market & sunset." },
  { name: "Vagator Beach", desc: "Cliff views." },
];

const Places = () => {
  return (
    <PageWrapper>

      <div className="px-6 py-20 max-w-6xl mx-auto text-black dark:text-white">

        <h2 className="text-3xl font-bold text-center mb-12">
          Goa Tourist Places 🌴
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >

          {places.map((place, i) => (
            <div
              key={i}
              className="bg-white/40 dark:bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/30 hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold">{place.name}</h3>
              <p className="text-gray-600 dark:text-gray-300">{place.desc}</p>
            </div>
          ))}

        </motion.div>

      </div>

    </PageWrapper>
  );
};

export default Places;