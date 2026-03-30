import Image from "next/image";

const works = [
  {
    area: "越前市",
    image:
      "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=1935&auto=format&fit=crop",
    alt: "照明交換",
    title: "古い蛍光灯をLED照明に交換",
    tags: ["照明工事", "省エネ"],
    quote:
      "「部屋がとても明るくなり、電気代も下がると聞いて楽しみです。」",
  },
  {
    area: "鯖江市",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc79b4?q=80&w=2069&auto=format&fit=crop",
    alt: "分電盤工事",
    title: "ブレーカー容量アップ工事",
    tags: ["分電盤", "電気工事"],
    quote:
      "「電子レンジとドライヤーを同時に使っても落ちなくなりました！」",
  },
  {
    area: "福井市",
    image:
      "https://images.unsplash.com/photo-1558002038-10917738179d?q=80&w=2070&auto=format&fit=crop",
    alt: "防犯カメラ",
    title: "店舗防犯カメラ設置",
    tags: ["防犯カメラ", "配線工事"],
    quote:
      "「配線もきれいに隠してくれて、スマホで見れるので安心です。」",
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
                <div className="absolute top-3 left-3 bg-blue-600/90 backdrop-blur text-white text-xs px-3 py-1 rounded-full z-10">
                  {work.area}
                </div>
                <Image
                  src={work.image}
                  alt={work.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
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
                <p className="text-sm bg-orange-50 p-4 rounded-xl text-gray-700 italic border-l-4 border-orange-300">
                  {work.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
