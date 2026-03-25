import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const pros = ["🌱 Clean air", "💰 Save money", "🏃 Good for health", "🔇 No noise"];
const cons = ["🌧️ Hard in rain", "🔋 Need to charge", "⛰️ Slow on hills", "📦 Hard with bags"];

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <>
      <div
        id="pros"
        ref={container}
        className="relative flex items-center justify-center h-screen overflow-hidden"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
          <motion.div style={{ y }} className="relative w-full h-full">
            <img
              src="https://cdn.poehali.dev/projects/2b159756-56d9-432d-8961-4365d5a420a9/files/2f2c8dc0-b78a-4e86-898a-c0adc62dbd52.jpg"
              alt="Eco abstract"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>
        </div>

        <h3 className="absolute top-12 right-6 text-white uppercase z-10 text-sm md:text-base lg:text-lg tracking-widest">
          Pros & Cons
        </h3>

        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 flex flex-col md:flex-row gap-8 md:gap-16">
          <div className="flex-1">
            <h2 className="text-green-400 text-2xl font-bold uppercase mb-6 tracking-wide">✅ Good</h2>
            <ul className="flex flex-col gap-4">
              {pros.map((p) => (
                <li key={p} className="text-white text-xl md:text-2xl font-medium">{p}</li>
              ))}
            </ul>
          </div>
          <div className="flex-1">
            <h2 className="text-red-400 text-2xl font-bold uppercase mb-6 tracking-wide">❌ Bad</h2>
            <ul className="flex flex-col gap-4">
              {cons.map((c) => (
                <li key={c} className="text-white text-xl md:text-2xl font-medium">{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
