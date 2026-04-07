const Loader = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-white dark:bg-black">
      <div className="flex flex-col items-center gap-4">

        {/* SPINNER */}
        <div className="w-12 h-12 border-4 border-gray-300 border-t-[#0B3C5D] rounded-full animate-spin"></div>

        <p className="text-gray-600 dark:text-gray-300 text-sm">
          Loading Goa Cab...
        </p>

      </div>
    </div>
  );
};

export default Loader;