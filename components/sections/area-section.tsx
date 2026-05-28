"use client";

import { useState } from "react";
import { MapPin, ExternalLink } from "lucide-react";

const cities = [
  {
    name: "鯖江市",
    embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51200!2d136.17!3d35.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff8e0f3a6b7c8d1%3A0x1234567890abcdef!2z6bau5rGf5biC!5e0!3m2!1sja!2sjp!4v1700000000000",
    maps: "https://maps.app.goo.gl/T77PMdZEcY2ccubT6",
  },
  {
    name: "越前市",
    embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51200!2d136.17!3d35.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff8e8a1b2c3d4e5%3A0xabcdef1234567890!2z6LaK5YmN5biC!5e0!3m2!1sja!2sjp!4v1700000000000",
    maps: "https://www.google.com/maps/place/越前市",
  },
  {
    name: "福井市",
    embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51200!2d136.22!3d36.06!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff8f0a1b2c3d4e5%3A0x1234abcdef567890!2z56aP5LqV5biC!5e0!3m2!1sja!2sjp!4v1700000000000",
    maps: "https://www.google.com/maps/place/福井市",
  },
  {
    name: "坂井市",
    embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51200!2d136.23!3d36.17!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff900a1b2c3d4e5%3A0xabcd1234ef567890!2z5Z2C5LqV5biC!5e0!3m2!1sja!2sjp!4v1700000000000",
    maps: "https://www.google.com/maps/place/坂井市",
  },
  {
    name: "あわら市",
    embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51200!2d136.22!3d36.22!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff910a1b2c3d4e5%3A0x1234abcd5678ef90!2z44GC44KP44KJ5biC!5e0!3m2!1sja!2sjp!4v1700000000000",
    maps: "https://www.google.com/maps/place/あわら市",
  },
  {
    name: "越前町",
    embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51200!2d136.13!3d35.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff8d0a1b2c3d4e5%3A0xabcdef12345678!2z6LaK5YmN55S6!5e0!3m2!1sja!2sjp!4v1700000000000",
    maps: "https://www.google.com/maps/place/越前町",
  },
  {
    name: "大野市",
    embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51200!2d136.49!3d35.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff8c0a1b2c3d4e5%3A0x1234567890abcd!2z5aSn6YeO5biC!5e0!3m2!1sja!2sjp!4v1700000000000",
    maps: "https://www.google.com/maps/place/大野市",
  },
  {
    name: "勝山市",
    embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51200!2d136.5!3d36.06!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff8b0a1b2c3d4e5%3A0xabcdef123456!2z5Yud5bGx5biC!5e0!3m2!1sja!2sjp!4v1700000000000",
    maps: "https://www.google.com/maps/place/勝山市",
  },
];

export default function AreaSection() {
  const [selected, setSelected] = useState(0);

  return (
    <section className="py-12 bg-[#f0f4f8] border-y border-gray-200 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", backgroundSize: "20px 20px" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-[#1a2744] rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <MapPin className="text-[#f0c832] animate-bounce-subtle" />
              対応エリア
            </h3>
            <p className="text-lg mb-8 leading-relaxed text-gray-300">
              鯖江市を拠点に、
              <span className="text-white font-bold border-b border-[#2b5ea7]">
                フットワーク軽く
              </span>
              回っています。
              <br />
              <span className="text-[#f0c832] font-bold mt-2 inline-block">
                エリア外でもお気軽にご相談下さい。
              </span>
            </p>
            <div className="flex flex-wrap gap-2">
              {cities.map((city, i) => (
                <button
                  key={city.name}
                  onClick={() => setSelected(i)}
                  className={`px-4 py-2 rounded-full font-bold border transition-all duration-300 cursor-pointer ${
                    selected === i
                      ? "bg-[#2b5ea7]/40 text-[#f0c832] border-[#2b5ea7]/60 ring-2 ring-[#2b5ea7]/30 shadow-lg shadow-[#2b5ea7]/10"
                      : "bg-white/10 text-blue-200 border-white/20 hover:bg-white/20"
                  }`}
                >
                  {city.name}
                </button>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 w-full flex flex-col gap-3">
            <div className="h-64 bg-[#0d1b33] rounded-2xl overflow-hidden relative border-4 border-white/10">
              <iframe
                src={cities[selected].embed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title={`${cities[selected].name}の地図`}
                className="opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
            <a
              href={cities[selected].maps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#2b5ea7] hover:bg-[#1a4a8a] text-white font-bold py-3 px-6 rounded-xl transition-all"
            >
              <MapPin size={18} />
              {cities[selected].name}をGoogleマップで開く
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
