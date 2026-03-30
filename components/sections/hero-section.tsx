import Image from "next/image";
import { Phone, Mail } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop"
          alt="電気工事作業風景"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50/80 to-white/90" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
        <div className="max-w-3xl mx-auto md:mx-0">
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-blue-200">
            福井県嶺北エリア対応・地域密着16年
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
            鯖江市の<br className="md:hidden" />
            <span className="relative inline-block px-2 z-10">
              <span className="absolute inset-0 bg-yellow-300 transform -rotate-1 rounded-lg -z-10" />
              町の電気工事屋さん
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 font-medium">
            「電気の困った」に、<br className="md:hidden" />
            すぐ駆けつけます。
            <br />
            <span className="text-base md:text-lg mt-2 inline-block text-gray-500">
              コンセント1つからOK。有資格者が丁寧に対応します。
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="tel:0778620815"
              className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold text-lg py-4 px-8 rounded-full shadow-lg transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2 border-b-4 border-yellow-600 active:border-b-0 active:translate-y-1"
            >
              <Phone className="w-6 h-6 fill-current" />
              0778-62-0815
            </a>
            <a
              href="mailto:sasaki0777@gmail.com?subject=【HPからお問い合わせ】"
              className="bg-white hover:bg-gray-50 text-blue-600 font-bold text-lg py-4 px-8 rounded-full shadow-md border-2 border-blue-100 flex items-center justify-center gap-2 hover:text-blue-700 transition-colors"
            >
              <Mail className="w-6 h-6" />
              メールで相談
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
