"use client";
import { Button } from "Components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "Components/ui/card";
import { Input } from "Components/ui/input";
import { Label } from "Components/ui/label";

import Link from "next/link";
import { Login } from "@/services/actions";
import cookies from "js-cookie";
import { useParams, useRouter } from "next/navigation";
import logo from 'Assets/images/plx-banner-merchant-login.svg';
import Image from "next/image";
import { useState } from "react";
import LoaderComp from "@/components/ui/loader";


export default function LoginPage() {
  const {locale} = useParams();
  const router = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Initialize loading state
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loginRequest = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value
    };
    setError("");
    setIsLoading(true); // Start loading
    const response = await Login(loginRequest.email, loginRequest.password);
    setIsLoading(false); // Stop loading
    console.log(response);
    if (response.success) {
      cookies.set("jwt", response.data.token, { expires: 1 });
      router.push(`/${locale}/`);
    } else {
      setError(response.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 ">
      <Card className="flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 w-[650px] max-w-screen-lg">
        {/* Column Left */}
        <div className="w-full md:w-1/3 flex items-center justify-center ml-2 ">
          <Image
            src={logo}
            alt="Imagem"
            className="w-full h-auto "
          />
        </div>

        {/* Column Right */}
        <div className="w-full md:w-2/3">
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="w-[350px]">
                <CardHeader>
                  <CardTitle>Backoffice Merchant</CardTitle>
                </CardHeader>
                <CardContent>

                  <div className="grid w-full items-left gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">User Name</Label>
                      <Input name="email" type="email"  required={true} placeholder="Your Email" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="framework">Password</Label>
                      <Input name="password" type="password" required={true} placeholder="Your password" />
                    </div>
                  </div>

                </CardContent>
                <CardFooter className="flex justify-between">
                  <Link href={'https://operations.sodexobeneficios.info/recovery'}>Forgot password?</Link>
                  {isLoading ? (
                    <LoaderComp />
                  ) : (
                    <Button type={'submit'}>Login</Button> 
                  )}
                </CardFooter>
              </div>
            </form>  
              <div className="text-red-500">{error}</div>
          </div>
        </div>
      </Card>
    </div>
  );
}
