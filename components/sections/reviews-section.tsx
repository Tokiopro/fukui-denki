import { Star } from "lucide-react";

function Stars() {
  return (
    <div className="flex gap-1 text-yellow-400 mb-4 mt-2">
      {[...Array(5)].map((_, i) => (
        <Star key={i} fill="currentColor" size={20} />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 bg-yellow-50/50 scroll-mt-20 relative overflow-hidden">
      {/* Large decorative quote mark */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 opacity-[0.04] pointer-events-none">
        <svg width="300" height="250" viewBox="0 0 24 24" fill="currentColor" className="text-gray-900">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">お客様の声</h2>
          <p className="mt-4 text-gray-600">
            地域の皆様から温かいお言葉をいただいております。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Review 1 */}
          <div className="bg-white p-8 rounded-tr-3xl rounded-bl-3xl rounded-tl-lg rounded-br-lg shadow-sm border border-orange-100 relative mt-4">
            <div className="absolute -top-4 left-8 bg-yellow-400 text-blue-900 px-4 py-1 rounded-full font-bold text-sm shadow-sm">
              エアコン修理
            </div>
            <Stars />
            <p className="text-gray-700 leading-relaxed mb-6 font-medium">
              「エアコンの水漏れで困っていたところ、すぐに連絡をもらえて、翌日には来て見てもらえました。スタッフの方はどの方も好印象で、丁寧に説明してくださいました。とにかく親切に対応してもらえるので、みなさんにおすすめしたい業者さんでした。ありがとうございました。」
            </p>
            <div className="flex items-center justify-end gap-3 border-t border-gray-100 pt-4">
              <div className="text-right">
                <p className="text-sm font-bold text-gray-800">越前市 T様</p>
                <p className="text-xs text-gray-400">2024.11</p>
              </div>
              <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                <div className="w-full h-full bg-orange-100 flex items-center justify-center text-orange-400 font-bold">
                  T
                </div>
              </div>
            </div>
          </div>

          {/* Review 2 */}
          <div className="bg-white p-8 rounded-tl-3xl rounded-br-3xl rounded-tr-lg rounded-bl-lg shadow-sm border border-blue-100 relative mt-4">
            <div className="absolute -top-4 left-8 bg-blue-600 text-white px-4 py-1 rounded-full font-bold text-sm shadow-sm">
              エアコン取付
            </div>
            <Stars />
            <p className="text-gray-700 leading-relaxed mb-6 font-medium">
              「連絡や当日の作業が非常にスムーズでした。壁の穴開けなど重要なポイントについての説明もあり、安心してお願い出来ました。仕事の丁寧さが好きで、電気のことはいつも佐々木電工さんに依頼しています。」
            </p>
            <div className="flex items-center justify-end gap-3 border-t border-gray-100 pt-4">
              <div className="text-right">
                <p className="text-sm font-bold text-gray-800">越前市 Y様</p>
                <p className="text-xs text-gray-400">2024.10</p>
              </div>
              <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                <div className="w-full h-full bg-blue-100 flex items-center justify-center text-blue-400 font-bold">
                  Y
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
