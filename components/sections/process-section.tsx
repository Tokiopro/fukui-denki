const steps = [
  { num: "01", title: "お問い合わせ", desc: "電話・フォームより" },
  { num: "02", title: "現地調査・お見積り", desc: "金額をご提示" },
  { num: "03", title: "工事日決定・施工", desc: "プロが対応します" },
  { num: "04", title: "お支払い", desc: "作業完了後" },
];

export default function ProcessSection() {
  return (
    <section className="py-16 bg-[#1a2744]">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-2xl font-bold text-center text-white mb-10">
          ご依頼の流れ
        </h2>
        <div className="flex flex-col md:flex-row justify-between relative gap-8 md:gap-4 px-4">
          {steps.map((step, idx) => (
            <div key={idx} className="flex-1 text-center relative z-10 group">
              <div className="w-20 h-20 mx-auto bg-[#2b5ea7] border-4 border-[#2b5ea7]/50 text-white rounded-full flex items-center justify-center font-bold text-2xl mb-4 shadow-lg group-hover:bg-[#f0c832] group-hover:text-[#1a2744] group-hover:border-[#f0c832]/50 transition-all duration-300 group-hover:shadow-[#f0c832]/20">
                {step.num}
              </div>
              <h3 className="font-bold text-white mb-2">{step.title}</h3>
              <p className="text-xs text-gray-300">{step.desc}</p>
            </div>
          ))}
          {/* Connecting gradient line */}
          <div className="hidden md:block absolute top-10 left-[10%] w-[80%] h-0.5 -z-0 bg-white/30 origin-left" />
        </div>
      </div>
    </section>
  );
}
