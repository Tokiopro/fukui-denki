import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fukui-denki.vercel.app"),
  title: "佐々木電工 | 鯖江市の町の電気工事屋さん",
  description:
    "福井県鯖江市の電気工事店。エアコン取付・LED照明交換・コンセント修理・防犯カメラ設置など、電気の困りごとに有資格者が丁寧に対応。嶺北エリア対応。",
  openGraph: {
    title: "佐々木電工 | 鯖江市の町の電気工事屋さん",
    description:
      "福井県鯖江市の電気工事店。エアコン・照明・コンセントなど電気の困りごとに駆けつけます。",
    siteName: "佐々木電工",
    url: "/",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/ogp.png",
        width: 1200,
        height: 630,
        alt: "佐々木電工 — 鯖江市の町の電気工事屋さん",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "佐々木電工 | 鯖江市の町の電気工事屋さん",
    description:
      "福井県鯖江市の電気工事店。エアコン・照明・コンセントなど電気の困りごとに駆けつけます。",
    images: [
      { url: "/ogp.png", alt: "佐々木電工 — 鯖江市の町の電気工事屋さん" },
    ],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body className="font-sans text-gray-700 antialiased bg-[#f0f4f8]">
        {children}
      </body>
    </html>
  );
}
