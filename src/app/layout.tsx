import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});
const geistZentry = localFont({
  src: "./fonts/zentry-regular.woff2",
  variable: "--font-zentry",
});
const geistRobertRegular = localFont({
  src: "./fonts/robert-regular.woff2",
  variable: "--font-robert-regular",
});

export const metadata: Metadata = {
  title: "Zentry Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`
      ${geistSans.variable}
      ${geistMono.variable}
      ${geistZentry.variable}
      ${geistRobertRegular.variable}
      `}>
        {children}
      </body>
    </html>
  );
}
