import Image from "next/image";
import { PenTool } from "lucide-react";

export default function GreetingSection() {
  return (
    <section className="py-16 md:py-24 bg-orange-50 relative overflow-hidden">
      {/* Decorative background elements with pulse */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-soft -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-soft translate-y-1/2 -translate-x-1/2" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-orange-200 rounded-full mix-blend-multiply filter blur-2xl animate-pulse-soft" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-6 md:p-12 shadow-xl border-4 border-white ring-4 ring-orange-100">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Photo Area */}
            <div className="w-full md:w-2/5 flex-shrink-0">
              <div className="relative mx-auto max-w-sm transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-0 bg-yellow-300 rounded-2xl transform translate-x-3 translate-y-3" />
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-lg border-2 border-white">
                  <Image
                    src="/images/電気_代表写真.jpg"
                    alt="代表 佐々木 義徳"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-4 bg-white px-6 py-3 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Representative
                  </span>
                  <span className="text-xl font-bold text-gray-800">
                    佐々木 義徳
                  </span>
                </div>
              </div>
            </div>

            {/* Message Content */}
            <div className="w-full md:w-3/5 text-center md:text-left">
              <div className="mb-6 inline-block">
                <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-bold mb-2 inline-block">
                  ごあいさつ
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
                  「ちょっと見てほしい」
                  <br />
                  <span className="text-blue-600 bg-blue-50 px-2 rounded-lg">
                    気軽に頼れる
                  </span>
                  <br />
                  町の電気屋さんでありたい
                </h2>
              </div>

              <div className="space-y-4 text-gray-600 text-lg leading-relaxed font-medium">
                <p>
                  こんにちは！
                  <br />
                  鯖江市の電気工事店『佐々木電工』の代表、佐々木です。
                  <br />
                  子供の頃から機械いじりが好きで、この仕事を始めて16年になります。
                </p>
                <p className="bg-yellow-50 p-4 rounded-xl border border-yellow-100 text-gray-700">
                  <span className="text-2xl mr-2">💡</span>
                  「スイッチ1個の交換でも来てくれるかな？」
                  <br />
                  そんな時こそ、遠慮なく私を頼ってください。
                </p>
                <p>
                  コンセント1つの不具合でも、放っておくと事故の元。
                  <br />
                  「あ、佐々木さんに電話しよう」と思い出してもらえるような、
                  <br />
                  身近で親しみやすい存在を目指しています。
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-center md:justify-end gap-2 text-gray-400">
                <PenTool size={16} />
                <span>Yoshinori Sasaki</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
