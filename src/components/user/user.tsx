"use client"

import Image from "next/image"
import { Button } from "../ui/button"
import NoPhoto from 'Assets/images/nophoto.png'
import { useContext } from "react"
import { AuthContext } from "@/context/AuthContext"
export const User = () => {
    const {name, email} = useContext<any>(AuthContext);
  return (
    <>
    
    <div className="flex min-w-max  relative">
            <Button type="submit" variant="ghost">
              <Image src={NoPhoto} height={32} alt="Logo" />
            </Button>
          </div>
          <p className="mr-2">{name}</p>
    
    </>
  )
}
