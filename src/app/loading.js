'use client';
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-r from-[#202632] via-[#1f2937] to-[#202632]">
      <motion.div
        className="w-16 h-16 border-4 border-t-[#00ADB5] border-b-[#00C1D0] rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
      <motion.p
        className="absolute bottom-20 text-white text-lg font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        Loading...
      </motion.p>
    </div>
  );
};

export default Loader;
