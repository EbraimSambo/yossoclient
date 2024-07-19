"use client"
import { MainProps } from '../../config/interfaces/interfaces'
import React from 'react'
import ThemeProviderApp from './ThemeProvider'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
const GlobalProvider: React.FC<MainProps> = ({ children }) => {
  return (
    <AppRouterCacheProvider>
      <ThemeProviderApp>
        {children}
      </ThemeProviderApp>
    </AppRouterCacheProvider>

  )
}

export default GlobalProvider