import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clocker",
  description: "팀 단위 일정관리",
  robots: {
    index: true,
    follow: true,
  }
};

const MainLayout: React.FC<Readonly<{children: React.ReactNode;}>> = ({children}) => <main>{children}</main>

export default MainLayout;
