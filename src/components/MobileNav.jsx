import { useNavigate, useLocation } from "react-router-dom";
import { Home, Map, Info } from "lucide-react";

const MobileNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { name: "Home", path: "/", icon: <Home size={20} /> },
    { name: "Attractions", path: "/goa-attractions", icon: <Map size={20} /> },
    { name: "About", path: "/about", icon: <Info size={20} /> },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden">
      <div className="flex gap-6 px-6 py-3 rounded-full backdrop-blur-lg bg-white/30 dark:bg-gray-900/40 shadow-xl border border-white/20">

        {tabs.map((tab) => {
          const active = location.pathname === tab.path;

          return (
            <button
              key={tab.path}
              onClick={() => navigate(tab.path)}
              className={`flex flex-col items-center text-xs transition ${
                active ? "text-black dark:text-white scale-110" : "text-gray-500"
              }`}
            >
              {tab.icon}
              {tab.name}
            </button>
          );
        })}

      </div>
    </div>
  );
};

export default MobileNav;