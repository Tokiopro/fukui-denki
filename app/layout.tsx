import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: "佐々木電工 | 鯖江市の町の電気工事屋さん",
  description:
    "福井県鯖江市の電気工事店。エアコン取付・LED照明交換・コンセント修理・防犯カメラ設置など、電気の困りごとに有資格者が丁寧に対応。嶺北エリア対応。",
  openGraph: {
    title: "佐々木電工 | 鯖江市の町の電気工事屋さん",
    description:
      "福井県鯖江市の電気工事店。エアコン・照明・コンセントなど電気の困りごとに駆けつけます。",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body className="font-sans text-gray-700 antialiased bg-orange-50/30">
        {children}
      </body>
    </html>
  );
}
