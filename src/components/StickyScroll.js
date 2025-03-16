import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function StickyScroll() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y1 = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["0vh", "-100vh", "-200vh"]
  );

  return (
    <div className="relative min-h-[400vh] bg-gray-100">
      <div
        className="sticky top-0 h-screen flex items-center justify-center overflow-hidden"
        ref={containerRef}
      >
        <motion.div style={{ y: y1 }} className="h-screen w-full">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="h-screen flex items-center justify-center text-4xl font-bold bg-white border-b"
            >
              Item {index + 1}
            </div>
          ))}
        </motion.div>
      </div>
      <footer className="h-screen bg-black text-white flex items-center justify-center text-2xl">
        Footer Section
      </footer>
    </div>
  );
}
