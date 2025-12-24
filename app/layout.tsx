import type { Metadata } from "next";
import { Impact } from './fonts';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Carne Íntima",
  description: "Perca-se",
  icons: {
    icon: '/images/vesquicio-icon.webp', // Note a barra inicial
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${Impact.variable} `}
      >
        {children}
      </body>
    </html>
  );
}