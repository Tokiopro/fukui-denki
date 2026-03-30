import { MapPin } from "lucide-react";

const cities = [
  "鯖江市",
  "越前市",
  "福井市",
  "坂井市",
  "あわら市",
  "越前町",
  "大野市",
  "勝山市",
];

export default function AreaSection() {
  return (
    <section className="py-12 bg-white border-y border-gray-100 relative overflow-hidden">
      {/* Dot pattern background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", backgroundSize: "20px 20px" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-gray-800 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <MapPin className="text-yellow-400 animate-bounce-subtle" />
              対応エリア
            </h3>
            <p className="text-lg mb-8 leading-relaxed text-gray-300">
              鯖江市を拠点に、
              <span className="text-white font-bold border-b border-yellow-400">
                フットワーク軽く
              </span>
              回っています。
              <br />
              <span className="text-yellow-200 font-bold mt-2 inline-block">
                エリア外でもお気軽にご相談下さい。
              </span>
            </p>
            <div className="flex flex-wrap gap-2">
              {cities.map((city) => (
                <span
                  key={city}
                  className={`px-4 py-2 rounded-full font-bold border transition-all duration-300 cursor-default ${
                    city === "鯖江市"
                      ? "bg-yellow-400/20 text-yellow-300 border-yellow-400/50 ring-2 ring-yellow-400/30 shadow-lg shadow-yellow-400/10"
                      : "bg-gray-700/50 text-yellow-400 border-gray-600 hover:bg-gray-700"
                  }`}
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 w-full h-64 bg-gray-600 rounded-2xl overflow-hidden relative border-4 border-gray-700">
            <div className="absolute inset-0 flex items-center justify-center opacity-30">
              <MapPin size={64} className="text-white" />
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3230.145612741914!2d136.1950!3d35.9450!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDU2JzQyLjAiTiAxMzbCsDExJzQyLjAiRQ!5e0!3m2!1sja!2sjp!4v1600000000000!5m2!1sja!2sjp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Sasaki Denko Map"
              className="opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
