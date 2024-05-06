
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import HeadMain from "Components/headMain";
import Footer from "Components/footer";

import "Styles/css/globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BackOffice Merchant PLuxee 2024",
  description: "BackOffice Merchant PLuxee 2024",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: { 
    locale: string 
  }
}

export default async function RootLayout({
  children, 
  params: {locale}
}: Readonly<RootLayoutProps>) {
  
  return (
        <div className="flex flex-col min-h-screen max-w-7xl mx-auto">
          <HeadMain />
          <div className="flex-grow itens-start container mx-auto py-8">
            {children}
          </div>
          <Footer />
        </div>
  );
}
