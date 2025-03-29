import React from "react";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Clocker",
  description: "시간표 정리",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
