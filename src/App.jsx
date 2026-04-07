import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import GoaAttractions from "./pages/GoaAttractions";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header /> {/* 👈 GLOBAL HEADER */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/goa-attractions" element={<GoaAttractions />} />
      </Routes>
    </>
  );
}

export default App;