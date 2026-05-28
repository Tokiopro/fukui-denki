"use client";

import { useEffect, useState } from "react";
import { Mail, Phone } from "lucide-react";

export default function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,.1)]">
      <div className="max-w-[600px] mx-auto grid grid-cols-2 gap-3 px-4 py-3">
        {/* メール無料相談 */}
        <a
          href="mailto:sasaki0777@gmail.com?subject=【HPからお問い合わせ】"
          className="flex items-center justify-center gap-2 rounded-xl text-white h-[56px]"
          style={{ background: "linear-gradient(135deg, #2b5ea7, #1a2744)", boxShadow: "0 4px 16px rgba(43,94,167,.3)" }}
        >
          <Mail size={20} strokeWidth={2.5} />
          <span className="text-[14px] font-[900] leading-tight">
            メールで
            <br />
            無料相談する
          </span>
        </a>

        {/* 電話無料相談 */}
        <a
          href="tel:0778620815"
          className="flex items-center justify-center gap-2 rounded-xl text-white h-[56px]"
          style={{ background: "#e85a2a", boxShadow: "0 4px 16px rgba(232,90,42,.3)" }}
        >
          <Phone size={20} strokeWidth={2.5} className="fill-current" />
          <span className="text-[14px] font-[900] leading-tight">
            電話で
            <br />
            無料相談する
          </span>
        </a>
      </div>
    </div>
  );
}
