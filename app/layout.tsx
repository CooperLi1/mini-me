import type { Metadata } from "next";
import { manrope } from "@/app/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mini Me",
    icons: {
    icon: '/minimefavo.ico',
  },
  description: "Cheap and simple educational robotics kit!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className={`${manrope.className } antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
