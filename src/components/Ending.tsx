import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "14%", label: "of CO₂ comes from transport" },
  { value: "2×", label: "bikes sold vs cars in 2023" },
  { value: "0g", label: "emissions from a bicycle" },
  { value: "€500", label: "saved per year vs a car" },
];

export default function Ending() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.85, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <div ref={ref} className="bg-white py-24 px-6 overflow-hidden">
      <motion.div style={{ scale, opacity }} className="max-w-5xl mx-auto text-center">
        <p className="uppercase text-xs tracking-widest text-green-500 mb-6">The big picture</p>
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-neutral-900 leading-tight mb-8">
          Small change.<br />
          <span className="text-green-500">Big impact.</span>
        </h2>
        <p className="text-lg md:text-xl text-neutral-500 max-w-xl mx-auto mb-20 leading-relaxed">
          One person on a bike = one less car on the road.<br />
          Together, we make the air clean and the city quiet.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-4xl md:text-5xl font-bold text-green-500">{s.value}</span>
              <span className="text-sm text-neutral-500 text-center leading-snug">{s.label}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-24 bg-green-500 rounded-2xl py-14 px-8"
        >
          <p className="text-white text-3xl md:text-5xl font-bold mb-4">
            🚲 Ride more. Drive less.
          </p>
          <p className="text-green-100 text-lg md:text-xl">
            The future is green — and it starts with you.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
