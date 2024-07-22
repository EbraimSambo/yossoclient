import Thanks from '@/components/auth/Thanks'
import { fetcher } from '@/config/fetcher'
import { Metadata } from 'next'
import { NextResponse } from 'next/server'
import React from 'react'

export const metadata: Metadata ={
  title: "Obrigado",
  robots:{
    index: false
  }
}
interface Params{
  params:{
      slug: string
  }
}

export default async function pageThanks (params: Params){
  console.log(params.params.slug)
  const very = await fetcher(`user/${params.params.slug}`)
  const createAt = new Date(very.createAt)
  const currentDate = new Date()
  const diffInMs = currentDate.getTime() - createAt.getTime();
  const diffInDays = diffInMs / (1000 * 3600 * 24);
  if (diffInDays >= 1) return NextResponse.redirect("/")
  console.log(very)
  return (
    <Thanks />
  )
}
