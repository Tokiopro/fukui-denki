const prices = [
  { item: "エアコン入替（外し込み）", price: "27,500円〜", desc: "" },
  { item: "エアコン修理", price: "19,800円〜", desc: "" },
  {
    item: "エアコンクリーニング",
    price: "16,500円〜",
    desc: "（フィルター自動掃除無し）",
  },
  {
    item: "アンテナ取付",
    price: "33,000円〜",
    desc: "アンテナ本体・電波調査・配線含む\n※ブースター・取付金具・分配器は別途",
  },
  {
    item: "スターリンク取付",
    price: "33,000円〜",
    desc: "※本体代金 別途",
  },
  {
    item: "LAN配線",
    price: "25,300円〜",
    desc: "（例・CAT6A 端末取付（空配管有））",
  },
  {
    item: "レンジフード入替",
    price: "66,000円〜",
    desc: "（60cm幅 × 60cm高 本体代金含む）",
  },
  { item: "コンセント・スイッチ交換", price: "6,600円〜", desc: "" },
  {
    item: "EVコンセント取付",
    price: "44,000円〜",
    desc: "（コンセント本体・配線含む）",
  },
  {
    item: "防犯カメラ設置",
    price: "19,800円〜",
    desc: "（カメラ本体代は別途）",
  },
];

export default function PricingSection() {
  return (
    <section id="price" className="py-20 bg-[#0d1b33] scroll-mt-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">料金の目安</h2>
          <p className="mt-4 text-gray-300">
            ※現場の状況により変動しますが、事前に必ずお見積もりをご提示します。
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur rounded-3xl border border-white/15 overflow-hidden">
          <div className="bg-gradient-to-r from-[#2b5ea7] via-[#1a2744] to-[#2b5ea7] p-6 text-white text-center font-bold text-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:200%_100%] animate-shimmer" />
            <span className="relative z-10">主な工事の参考価格（税込）</span>
          </div>
          <div className="divide-y divide-white/10">
            {prices.map((price, idx) => (
              <div
                key={idx}
                className={`flex flex-col sm:flex-row sm:justify-between sm:items-center p-5 hover:bg-white/5 transition-colors gap-2 sm:gap-0 ${
                  idx % 2 === 1 ? "bg-white/5" : ""
                }`}
              >
                <div className="flex flex-col">
                  <span className="font-medium text-white flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#f0c832] rounded-full shrink-0" />
                    {price.item}
                  </span>
                  {price.desc && (
                    <span className="text-xs text-gray-300 mt-1 ml-4 whitespace-pre-wrap leading-relaxed">
                      {price.desc}
                    </span>
                  )}
                </div>
                <span className="font-bold text-xl text-[#f0c832] self-end sm:self-auto shrink-0">
                  {price.price}
                </span>
              </div>
            ))}
          </div>
          <div className="p-6 bg-white/5 text-center text-sm text-gray-300 font-medium border-t border-white/10">
            現地確認後に正式なお見積もりをいたします。
            <br />
            お見積もり後のキャンセルも可能ですので、まずはお気軽にご相談ください。
          </div>
        </div>
      </div>
    </section>
  );
}
