import { ArrowRight } from "lucide-react";

const steps = [
  { num: "01", title: "お問い合わせ", desc: "電話・フォームより" },
  { num: "02", title: "現地調査・お見積り", desc: "金額をご提示" },
  { num: "03", title: "工事日決定・施工", desc: "プロが対応します" },
  { num: "04", title: "お支払い", desc: "作業完了後" },
];

export default function ProcessSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">
          ご依頼の流れ
        </h2>
        <div className="flex flex-col md:flex-row justify-between relative gap-8 md:gap-4 px-4">
          {steps.map((step, idx) => (
            <div key={idx} className="flex-1 text-center relative z-10 group">
              <div className="w-20 h-20 mx-auto bg-white border-4 border-blue-50 text-blue-600 rounded-full flex items-center justify-center font-bold text-2xl mb-4 shadow-lg group-hover:border-yellow-400 group-hover:text-yellow-500 transition-colors">
                {step.num}
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-xs text-gray-500">{step.desc}</p>
              {/* Arrow for desktop */}
              {idx < 3 && (
                <div className="hidden md:block absolute top-10 -right-1/2 w-full text-gray-200">
                  <ArrowRight className="mx-auto" />
                </div>
              )}
            </div>
          ))}
          {/* Connecting line */}
          <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-gray-100 -z-0" />
        </div>
      </div>
    </section>
  );
}
