import type { Metadata } from "next";






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
      <div>
        {children}
      </div>
  );
}
