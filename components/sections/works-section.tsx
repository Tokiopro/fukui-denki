import Image from "next/image";

const works = [
  {
    area: "鯖江市",
    image: "/images/S__7151636_0.jpg",
    alt: "エアコン入替",
    title: "エアコン入替工事",
    tags: ["エアコン", "入替工事"],
    quote:
      "「新しいエアコンで快適になりました。取付もきれいで大満足です。」",
  },
  {
    area: "鯖江市",
    image: "/images/S__7151632_0.jpg",
    alt: "レンジフード入替",
    title: "レンジフード入替工事",
    tags: ["レンジフード", "入替工事"],
    quote:
      "「換気の音が静かになって、吸い込みも良くなりました！」",
  },
  {
    area: "鯖江市",
    image: "/images/S__7151621_0.jpg",
    alt: "アンテナ取付",
    title: "アンテナ・BS取付工事",
    tags: ["アンテナ", "BS取付"],
    quote:
      "「映りもバッチリで、丁寧に取り付けてもらえました。」",
  },
];

export default function WorksSection() {
  return (
    <section id="works" className="py-20 bg-gray-50 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            施工事例・実績
          </h2>
          <p className="mt-4 text-gray-600">丁寧な施工を心がけています。</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {works.map((work, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="h-56 bg-gray-200 relative overflow-hidden">
                {/* Numbering Badge */}
                <div className="absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center font-bold text-blue-600 text-sm z-10 shadow-sm">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <div className="absolute top-3 left-3 bg-blue-600/90 backdrop-blur text-white text-xs px-3 py-1 rounded-full z-10">
                  {work.area}
                </div>
                <Image
                  src={work.image}
                  alt={work.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors duration-300" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
                  {work.title}
                </h3>
                <div className="flex gap-2 mb-4">
                  {work.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="relative">
                  {/* Decorative quote mark */}
                  <svg className="absolute -top-2 -left-1 w-6 h-6 text-orange-200" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-sm bg-orange-50 p-4 rounded-xl text-gray-700 italic border-l-4 border-orange-300 pl-6">
                    {work.quote}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
