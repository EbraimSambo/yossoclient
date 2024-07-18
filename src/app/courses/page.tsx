import Courses from '@/components/home/Courses'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata ={
    title: "Cursos"
}
export default function CoursesPage () {
  return (
    <>
      <Courses />  
  </>
  )
}

