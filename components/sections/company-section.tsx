import { Building2, MapPin, Phone, Mail } from "lucide-react";

export default function CompanySection() {
  return (
    <section id="company" className="py-20 bg-gray-50 scroll-mt-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-2">
            <Building2 className="text-blue-600" />
            会社概要
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50/50 transition-colors">
                  <th className="py-4 px-2 text-gray-500 font-medium whitespace-nowrap w-32">
                    屋号
                  </th>
                  <td className="py-4 px-2 font-bold text-gray-800">
                    佐々木電工
                  </td>
                </tr>
                <tr className="hover:bg-gray-50/50 transition-colors">
                  <th className="py-4 px-2 text-gray-500 font-medium">
                    代表者
                  </th>
                  <td className="py-4 px-2 text-gray-800">
                    佐々木 義徳（ささき よしのり）
                  </td>
                </tr>
                <tr className="hover:bg-gray-50/50 transition-colors">
                  <th className="py-4 px-2 text-gray-500 font-medium">
                    所在地
                  </th>
                  <td className="py-4 px-2 text-gray-800">
                    〒916-0084 福井県鯖江市小泉町30-5-15
                    <br />
                    <a
                      href="https://goo.gl/maps/placeholder"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 text-sm hover:underline flex items-center gap-1 mt-1"
                    >
                      <MapPin size={14} /> Googleマップで見る
                    </a>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50/50 transition-colors">
                  <th className="py-4 px-2 text-gray-500 font-medium">
                    登録番号
                  </th>
                  <td className="py-4 px-2 text-gray-800">
                    登録電気工事業者 福井県知事登録 第 202200265
                  </td>
                </tr>
                <tr className="hover:bg-gray-50/50 transition-colors">
                  <th className="py-4 px-2 text-gray-500 font-medium">
                    営業時間
                  </th>
                  <td className="py-4 px-2 text-gray-800">8:00 〜 20:00</td>
                </tr>
                <tr className="hover:bg-gray-50/50 transition-colors">
                  <th className="py-4 px-2 text-gray-500 font-medium">
                    連絡先
                  </th>
                  <td className="py-4 px-2 text-gray-800 font-medium">
                    <div className="flex flex-col sm:flex-row gap-4 mt-1">
                      <a
                        href="tel:0778620815"
                        className="relative flex items-center gap-2 bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg font-bold hover:bg-yellow-500 transition-colors w-fit group"
                      >
                        <span className="absolute inset-0 rounded-lg animate-pulse-soft bg-yellow-400/40" />
                        <Phone size={16} className="relative z-10" />
                        <span className="relative z-10">0778-62-0815</span>
                      </a>
                      <a
                        href="mailto:sasaki0777@gmail.com?subject=【HPからお問い合わせ】"
                        className="flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-bold hover:bg-blue-200 transition-colors w-fit"
                      >
                        <Mail size={16} /> sasaki0777@gmail.com
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
