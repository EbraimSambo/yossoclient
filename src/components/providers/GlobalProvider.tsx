"use client"
import { MainProps } from '@/config/interfaces/interfaces'
import React from 'react'
import ThemeProviderApp from './ThemeProvider'

const GlobalProvider: React.FC<MainProps> = ({children}) => {
  return (
    <ThemeProviderApp>
        {children}
    </ThemeProviderApp>
  )
}

export default GlobalProvider