import Header from "./Header";
import MobileNav from "./MobileNav";

const PageWrapper = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-400 dark:from-gray-900 dark:via-gray-800 dark:to-black">

      <Header />

      <div className="pt-24 pb-24">
        {children}
      </div>

      {/* 🔥 MOBILE NAV */}
      <MobileNav />

    </div>
  );
};

export default PageWrapper;