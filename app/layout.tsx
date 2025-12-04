import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/common/header";
import Footer from "@/components/common/Footer";
import { Chakra_Petch, Ubuntu } from "next/font/google";

const chakra = Chakra_Petch({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-chakra",
});

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-ubuntu",
});


export const metadata: Metadata = {
  title: "Geminus Tech",
  description: "Created by geminus tech",
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${chakra.variable} ${ubuntu.variable} antialiased bg-[rgb(2,1,3)]`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
