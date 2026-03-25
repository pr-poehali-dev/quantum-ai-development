const transports = [
  {
    id: "types",
    emoji: "🚲",
    title: "City Bike",
    subtitle: "Simple & cheap",
    desc: "No fuel. No noise. Just ride!",
    details: [
      "A city bike is a normal bicycle. You use your legs to move it.",
      "It is very cheap. You do not pay for fuel or electricity.",
      "Good for short trips — to school, to the shop, to the park.",
      "You can park it anywhere. No traffic. No pollution.",
    ],
    facts: ["Speed: 15–25 km/h", "Cost: low", "No fuel needed", "Good for health"],
    image: "https://cdn.poehali.dev/projects/2b159756-56d9-432d-8961-4365d5a420a9/files/34af6f17-6da7-45f3-bab2-91ef7ae58df9.jpg",
    tag: "Bicycle · Example 1",
  },
  {
    id: "ebike",
    emoji: "⚡",
    title: "Electric Bike",
    subtitle: "Fast & green",
    desc: "Use electricity. Go far. Stay clean.",
    details: [
      "An electric bike has a small motor. It helps you go faster and farther.",
      "You charge it like a phone. One charge = up to 80 km.",
      "Good for long trips or hilly roads. You do not get tired.",
      "It is clean — no smoke, no pollution.",
    ],
    facts: ["Speed: 25–45 km/h", "Range: up to 80 km", "One charge needed", "Zero emissions"],
    image: "https://cdn.poehali.dev/projects/2b159756-56d9-432d-8961-4365d5a420a9/files/9e2369e4-9cdc-473b-8b51-d4972e8f5358.jpg",
    tag: "Bicycle · Example 2",
  },
];

export default function Featured() {
  return (
    <div id="types" className="bg-white">
      {transports.map((item, i) => (
        <div
          key={item.id}
          className={`flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 ${i % 2 === 0 ? "bg-white" : "bg-neutral-50"}`}
        >
          <div className={`flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 ${i % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}>
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className={`flex-1 text-left lg:h-[800px] flex flex-col justify-center ${i % 2 === 0 ? "lg:mr-12 lg:order-1" : "lg:ml-12 lg:order-2"}`}>
            <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-500">{item.tag}</h3>
            <div className="text-6xl mb-4">{item.emoji}</div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-3 text-neutral-900">{item.title}</h2>
            <p className="text-lg text-green-600 font-medium mb-6">{item.subtitle}</p>
            <ul className="flex flex-col gap-3 mb-8">
              {item.details.map((d, idx) => (
                <li key={idx} className="text-base lg:text-lg text-neutral-600 leading-relaxed flex gap-3">
                  <span className="text-green-500 mt-1 shrink-0">→</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              {item.facts.map((f) => (
                <span key={f} className="bg-green-50 border border-green-200 text-green-800 text-sm px-3 py-1 rounded-full font-medium">
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}