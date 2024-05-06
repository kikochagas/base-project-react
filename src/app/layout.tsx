"use client";
import { GetUser } from "@/services/actions";
import cookies from "js-cookie";
import { useLocale } from "next-intl";
import { useParams, useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import "Styles/css/globals.css";
import LoaderComp from "@/components/ui/loader";
import { AuthProvider } from "@/context/AuthProvider";
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const router = useRouter();
  const token = cookies.get('jwt');
  const [dataUser, setDataUser] = useState({ email: '', name: '', logged: false });
  const [isLoading, setIsLoading] = useState(true);
  const {locale} = useParams()
  const redirectToLogin = () => {
    
    router.push(`/${locale}/login`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!token) {
          redirectToLogin();
          return;
        }
        const userResponse = await GetUser(token);

        if (userResponse.success) {
          setDataUser({ ...userResponse.data, logged:true });
        } else {
          redirectToLogin();
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        redirectToLogin();
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [token, router]);

    return (
    <html lang={locale?.toString()}>
      <body className={inter.className}>
        <AuthProvider state={dataUser}>
          {
          (isLoading)
          ? <LoaderComp />
          : <div>{children}</div>
        }
        </AuthProvider>
        
      </body>
    </html>)
}
