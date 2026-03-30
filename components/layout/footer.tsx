import { Wrench } from "lucide-react";

const navLinks = [
  { name: "ホーム", href: "#home" },
  { name: "サービス", href: "#services" },
  { name: "施工事例", href: "#works" },
  { name: "料金", href: "#price" },
  { name: "お客様の声", href: "#reviews" },
  { name: "会社概要", href: "#company" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t-4 border-yellow-400">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-6 text-white font-bold text-2xl">
          <div className="bg-yellow-400 p-1 rounded transform -rotate-6">
            <Wrench className="w-5 h-5 text-blue-900" />
          </div>
          佐々木電工
        </div>
        <p className="mb-6 text-sm leading-relaxed">
          〒916-0084 福井県鯖江市小泉町30-5-15
          <br />
          福井県知事登録 第 202200265
          <br />
          <span className="text-yellow-500">インボイス登録店</span>
        </p>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-white transition-colors border-b border-transparent hover:border-yellow-400 pb-0.5"
            >
              {link.name}
            </a>
          ))}
        </div>
        <p className="text-xs text-gray-600">
          &copy; {new Date().getFullYear()} Sasaki Denko. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
