import { useTranslations } from "next-intl";
import Link from "next/link"
import LocalSwitcher from "Components/local-switcher";
import CMenubar from "Components/c-menubar";
import { Button } from "Components/ui/button"
import { Input } from "Components/ui/input"
import Image from 'next/image'
import { MagnifyingGlassIcon, BellIcon, HamburgerMenuIcon } from "@radix-ui/react-icons"

import PluxeeImage from 'Assets/images/pluxee.png'

import { LogoutComp } from "../logout/Logout";
import { User } from "../user/user";

export default function HeadMain() {
  const t = useTranslations('Navigation');

  return (
    <>
      <header className="p-4">
        <div className="flex ">
          <div className="min-w-max px-4">
            <a href="/" rel="noopener noreferrer" className="ml-auto">
              <Image src={PluxeeImage} height={48} alt="Logo" />
            </a>
          </div>
          <div className="flex flex-1 justify-center ">
            <div className="flex w-50 max-w-sm items-center space-x-2 ">
              <Input type="search" placeholder="Search" />
              
              <Button type="submit" variant="outline">
                <MagnifyingGlassIcon></MagnifyingGlassIcon>
              </Button>
            </div>
          </div>
          <div className="flex items-center">
          <div className="flex min-w-max relative">
            <Button type="submit" variant="ghost">
              <BellIcon></BellIcon>
              <div className="absolute top-1 right-2 w-2 h-2 bg-red-500 rounded-full"></div>
            </Button>
          </div>
          <User />
          <div className="flex min-w-max  text-sm pr-4">
              <LocalSwitcher />
          </div>
          <div className="flex min-w-max  text-sm pr-4">
              <LogoutComp />
          </div>
          </div>
        </div>

        <div className="flex h-4"></div>
        <div className="flex items-center">
          <div className="flex  px-4 ">
            <div className="flex w-50 max-w-sm items-center space-x-2 ">
              <Button type="submit" variant="ghost">
                <HamburgerMenuIcon />
              </Button>
            </div>
          </div>
            <div className="flex min-w-max px-4 font-bold text-xl">
              MERCHANT
            </div>
            <div className="flex flex-1 px-4 justify-end">
              <div className="w-72">
                <CMenubar />
              </div>
            </div>
        </div>
      </header>
    </>
  )
}