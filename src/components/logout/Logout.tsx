"use client"
import React from 'react'
import { Button } from '../ui/button'
import { Logout} from '@/services/actions'
import cookies from "js-cookie"
import { useParams, useRouter } from 'next/navigation'


export const LogoutComp = () => {
  const {locale} = useParams()
  const router = useRouter()
  const handleClick = async () => {
    const response = await Logout()
    console.log(response);
    if(response.success){
      cookies.remove('jwt');
      router.push(`/${locale}/login`)
    }
}
  return (
    <Button onClick={handleClick}>Logout</Button>
  )
}
