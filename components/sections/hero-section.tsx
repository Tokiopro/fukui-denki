import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import HeroEntrance, { HeroItem } from "@/components/ui/hero-entrance";

export default function HeroSection() {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden scroll-mt-20">
      {/* Background with Ken Burns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 animate-ken-burns origin-center">
          <Image
            src="/images/電気_写真.jpg"
            alt="電気工事作業風景"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50/80 via-white/60 to-white/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/30 via-transparent to-transparent" />
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 right-[15%] w-24 h-24 bg-yellow-300/20 rounded-full blur-xl animate-float" />
      <div className="absolute top-40 left-[10%] w-32 h-32 bg-blue-300/15 rounded-full blur-2xl animate-float-slow" />
      <div className="absolute bottom-20 right-[25%] w-20 h-20 bg-orange-200/20 rounded-full blur-lg animate-float-slow" />
      <div className="absolute top-1/2 left-[5%] w-16 h-16 bg-yellow-400/10 rounded-full blur-xl animate-float" />

      <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
        <HeroEntrance>
          <div className="max-w-3xl mx-auto md:mx-0">
            <HeroItem delay={0}>
              <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-blue-200 shadow-sm">
                福井県嶺北エリア対応・地域密着16年
              </div>
            </HeroItem>

            <HeroItem delay={150}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
                鯖江市の<br className="md:hidden" />
                <span className="relative inline-block px-2 z-10">
                  <span className="absolute inset-0 bg-yellow-300 transform -rotate-1 rounded-lg -z-10 shadow-[0_0_20px_rgba(250,204,21,0.3)]" />
                  町の電気工事屋さん
                </span>
              </h1>
            </HeroItem>

            <HeroItem delay={300}>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 font-medium">
                「電気の困った」に、<br className="md:hidden" />
                すぐ駆けつけます。
                <br />
                <span className="text-base md:text-lg mt-2 inline-block text-gray-500">
                  コンセント1つからOK。有資格者が丁寧に対応します。
                </span>
              </p>
            </HeroItem>

            <HeroItem delay={500}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="tel:0778620815"
                  className="group bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold text-lg py-4 px-8 rounded-full shadow-lg transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2 border-b-4 border-yellow-600 active:border-b-0 active:translate-y-1"
                >
                  <Phone className="w-6 h-6 fill-current group-hover:animate-bounce-subtle" />
                  0778-62-0815
                </a>
                <a
                  href="mailto:sasaki0777@gmail.com?subject=【HPからお問い合わせ】"
                  className="bg-white hover:bg-gray-50 text-blue-600 font-bold text-lg py-4 px-8 rounded-full shadow-md border-2 border-blue-100 flex items-center justify-center gap-2 hover:text-blue-700 transition-all hover:-translate-y-0.5"
                >
                  <Mail className="w-6 h-6" />
                  メールで相談
                </a>
              </div>
            </HeroItem>
          </div>
        </HeroEntrance>
      </div>
    </section>
  );
}
