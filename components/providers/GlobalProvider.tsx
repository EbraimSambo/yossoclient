"use client"
import { MainProps } from '../../config/interfaces/interfaces'
import React from 'react'
import ThemeProviderApp from './ThemeProvider'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { SWRConfig } from "swr";
import { fetcher } from '@/config/fetcher';
const GlobalProvider: React.FC<MainProps> = ({ children }) => {
  return (
    <SWRConfig value={{ fetcher, }} >
      <AppRouterCacheProvider>
        <ThemeProviderApp>
          {children}
        </ThemeProviderApp>
      </AppRouterCacheProvider>
    </SWRConfig>
  )
}

export default GlobalProvider