import FormLogin from '@/components/auth/forms/FormLogin'
import React from 'react'
import { getServerSession } from "next-auth";
import { authOptions } from '@/config/auth/auth.config';
import { redirect } from 'next/navigation';
import { clientURL } from '@/config/constants/constants';

export const metadata={
  title: "Login"
}
export default async function PageLogin (){
  const session = await getServerSession(authOptions)
  if(session) return redirect(clientURL)
  return (
    <FormLogin />
  )
}
