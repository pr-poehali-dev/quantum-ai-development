import { motion } from "framer-motion";

export default function ThankYou() {
  return (
    <section className="relative min-h-screen bg-green-600 flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity"
        style={{
          backgroundImage:
            "url('https://cdn.poehali.dev/projects/2b159756-56d9-432d-8961-4365d5a420a9/files/bc1fb194-4dc9-4ee6-ab81-d4fee811e9a1.jpg')",
        }}
      />

      {/* Green gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-700/60 via-green-600/40 to-green-900/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="uppercase text-green-200 tracking-[0.3em] text-sm mb-8"
        >
          EcoMove Presentation
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-[18vw] sm:text-[14vw] lg:text-[12vw] font-bold text-white leading-none tracking-tight"
        >
          Thank
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-[18vw] sm:text-[14vw] lg:text-[12vw] font-bold text-green-300 leading-none tracking-tight -mt-4 sm:-mt-6"
        >
          You
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-10 text-lg sm:text-xl md:text-2xl text-green-100 max-w-lg mx-auto leading-relaxed"
        >
          Choose green transport. Choose a better future.<br />
          🌿 Go green. Go far.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center gap-12 text-green-200"
        >
          {["🚲 Cycle", "🛴 Scoot", "🚶 Walk"].map((item) => (
            <span key={item} className="text-xl sm:text-2xl font-medium">
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
