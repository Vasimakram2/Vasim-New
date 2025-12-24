import type { Metadata } from "next";
import { Audiowide, Lato } from "next/font/google";
import "./globals.css";

const audiowide = Audiowide({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-audiowide'
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-lato'
});

export const metadata: Metadata = {
  title: "AJ Business Consultancy",
  description: "providing top-notch consultancy services for steel plants, including commissioning, operations & maintenance, CCM, and manpower solutions for Gulf countries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${audiowide.variable} ${lato.variable}`}>
      <body className={lato.className}>
        {children}
      </body>
    </html>
  );
}
