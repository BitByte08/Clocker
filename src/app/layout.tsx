import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import TeamlistBar from "@/components/global/layout/TeamlistBar";

const pretendard = localFont({
  src: "../../public/fonts/pretendard/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "Clocker",
  description: "팀 단위 일정관리",
  robots: {
    index: true,
    follow: true,
  },
};

const RootLayout: React.FC<Readonly<{ children: React.ReactNode }>> = ({
  children,
}) => (
  <html lang="ko" className={`${pretendard.variable}`}>
    <body className={`${pretendard.className} p-2 flex gap-2`}>
      <TeamlistBar />
      {children}
    </body>
  </html>
);

export default RootLayout;
