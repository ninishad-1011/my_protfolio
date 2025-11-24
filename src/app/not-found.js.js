'use client';
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#202632] via-[#1f2937] to-[#202632] text-white px-6">
      
      <motion.h1
        className="text-[8rem] md:text-[12rem] font-bold text-[#00ADB5]"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
      >
        404
      </motion.h1>

      <motion.h2
        className="text-3xl md:text-5xl font-semibold mt-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Oops! Page Not Found
      </motion.h2>

      <motion.p
        className="mt-4 text-gray-300 text-center max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </motion.p>

      <motion.button
        className="mt-8 px-6 py-3 bg-[#00ADB5] text-black rounded-lg font-semibold hover:bg-[#00C1D0] transition-all shadow-lg"
        whileHover={{ scale: 1.1, boxShadow: "0 0 20px #00ADB5" }}
        whileTap={{ scale: 0.95 }}
        onClick={() => router.push("/")}
      >
        Go Back Home
      </motion.button>

      {/* Optional floating particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className={`w-2 h-2 bg-[#00C1D0] rounded-full absolute`}
          animate={{
            y: [0, -20 + i*2, 0],
            x: [0, 20 - i*2, 0]
          }}
          transition={{ repeat: Infinity, duration: 5 + i, ease: "easeInOut" }}
          style={{ top: `${i*8 + 10}%`, left: `${i*10 + 5}%` }}
        />
      ))}
    </div>
  );
};

export default NotFoundPage;
