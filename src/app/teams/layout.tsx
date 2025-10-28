import React from "react";
import type { Metadata } from "next";
import TeamToolbar from "@/components/Teams/layout/TeamToolbar";

export const metadata: Metadata = {
  title: "Clocker",
  description: "팀 단위 일정관리",
  robots: {
    index: true,
    follow: true,
  },
};

const MainLayout: React.FC<Readonly<{ children: React.ReactNode }>> = ({
  children,
}) => (
  <main className="flex-1">
    {children}
    <TeamToolbar />
  </main>
);

export default MainLayout;
