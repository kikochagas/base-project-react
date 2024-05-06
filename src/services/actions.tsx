"use server"

import { GetUserResponse } from "./interfaces/Responses/getUser.interface";
import { LoginResponse } from "./interfaces/Responses/login.interface";
import { LogoutResponse } from "./interfaces/Responses/logout.interface";


const URL_API = process.env.NEXT_PUBLIC_URL_API_BE
export async function Login(email:string, password:string): Promise<LoginResponse> {
    try {
        const loginRequest = {
            email: email,
            password: password
          }
        const res = await fetch(URL_API+'/Auth/login', {
          method: 'POST',
          headers: 
          { 
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify(loginRequest)
        })
        const response = await res.json();
        return response;
      } catch (error) {
        throw error
      }
}

export async function GetUser(token?: string): Promise<GetUserResponse> {
  try {
    const url = URL_API + `/Auth/user${(token !== undefined) ? `?token=${token}` : ''}`
    const res = await fetch(url);
    const response = await res.json();
    return response as GetUserResponse;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function Logout(): Promise<LogoutResponse> {
  try {
    const url = URL_API + `/Auth/logout`;
    const res = await fetch(url, {
      method: 'POST'
    })
    const response = await res.json();
    return response as LogoutResponse;
  } catch (error) {
    console.error(error);
    throw error;
  }
}