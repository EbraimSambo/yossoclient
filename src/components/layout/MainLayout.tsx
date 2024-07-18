"use client"
import { MainProps } from '@/config/interfaces/interfaces'
import React, { useRef } from 'react'
import NavBar from './bases/NavBar'
import Footer from './bases/Footer'
import { LayoutBox, MainContent } from './bases/styled'

const MainLayout: React.FC<MainProps> = ({ children }) => {
    const refNavbar = useRef(null)
    return (
        <div ref={refNavbar}>
            <LayoutBox>
                <NavBar target={refNavbar} />
                <MainContent component={"main"} >
                    {children}
                </MainContent>
                <Footer />
            </LayoutBox>
        </div>

    )
}

export default MainLayout