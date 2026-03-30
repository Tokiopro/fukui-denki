import {
  Wind,
  Tv,
  Plug,
  Lightbulb,
  Zap,
  Wifi,
  Video,
  Fan,
  Satellite,
  Smartphone,
  Building2,
  ShieldCheck,
} from "lucide-react";
import { type ReactNode } from "react";

interface ServiceItem {
  name: string;
  desc: string;
  icon: ReactNode;
}

interface BizServiceItem {
  name: string;
  icon: ReactNode;
}

const serviceHome: ServiceItem[] = [
  { name: "エアコン工事", desc: "取付・入替・修理・クリーニング", icon: <Wind size={32} /> },
  { name: "アンテナ工事", desc: "地デジ・BS取付・撤去", icon: <Tv size={32} /> },
  { name: "コンセント", desc: "増設・交換・修理", icon: <Plug size={32} /> },
  { name: "照明交換・LED", desc: "シーリング・ダウンライト", icon: <Lightbulb size={32} /> },
  { name: "ブレーカー", desc: "容量変更・交換・漏電対応", icon: <Zap size={32} /> },
  { name: "LAN工事", desc: "配線・端子増設", icon: <Wifi size={32} /> },
  { name: "換気扇", desc: "浴室・キッチン・トイレ", icon: <Fan size={32} /> },
  { name: "防犯カメラ", desc: "設置・インターホン", icon: <Video size={32} /> },
  { name: "スターリンク", desc: "アンテナ設置・配線", icon: <Satellite size={32} /> },
  { name: "スイッチ交換", desc: "反応しない・古いスイッチ", icon: <Smartphone size={32} /> },
];

const serviceBiz: BizServiceItem[] = [
  { name: "業務用エアコン", icon: <Wind size={28} /> },
  { name: "店舗配線", icon: <Plug size={28} /> },
  { name: "看板照明", icon: <Lightbulb size={28} /> },
  { name: "防犯システム", icon: <Video size={28} /> },
  { name: "社内LAN構築", icon: <Wifi size={28} /> },
  { name: "動力工事", icon: <Zap size={28} /> },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-blue-50/50 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-blue-500 font-bold tracking-widest text-sm uppercase bg-white px-4 py-1 rounded-full shadow-sm">
            Menu
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
            こんな工事、お任せください
          </h2>
          <p className="text-gray-600">
            一般家庭の小さなお困りごとから、店舗の配線工事まで。
            <br />
            アイコンをクリックすると詳細が見れるわけではありませんが、一目でわかるようにしました。
          </p>
        </div>

        {/* Grid Layout for Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {serviceHome.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-yellow-400 group-hover:text-blue-900 transition-colors">
                {service.icon}
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{service.name}</h3>
              <p className="text-xs text-gray-500 leading-snug">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Business Services Sub-section */}
        <div className="mt-16 bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6 mb-8 border-b border-gray-100 pb-6">
            <div className="bg-blue-600 p-3 rounded-xl text-white shadow-lg shadow-blue-200">
              <Building2 size={32} />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-800">
                店舗・法人様向け工事
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                テナント改修、事務所の電気設備もお任せください
              </p>
            </div>
            <div className="md:ml-auto bg-gray-100 text-gray-600 px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2">
              <ShieldCheck size={16} />
              登録電気工事業者 第202200265号
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {serviceBiz.map((biz, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-2 hover:bg-gray-50 rounded-xl transition-colors"
              >
                <div className="text-gray-400 mb-2">{biz.icon}</div>
                <span className="text-sm font-bold text-gray-700">
                  {biz.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
