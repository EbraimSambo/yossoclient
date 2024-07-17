"use client"
import { MainProps } from '@/config/interfaces/interfaces'
import React from 'react'
import NavBar from './bases/NavBar'
import Footer from './bases/Footer'
import { LayoutBox, MainContent } from './bases/styled'

const MainLayout: React.FC<MainProps> = ({ children }) => {
    return (
        <LayoutBox>
            <NavBar />
            <MainContent component={"main"} >
                {children}
            </MainContent>
            <Footer />
        </LayoutBox>
    )
}

export default MainLayout