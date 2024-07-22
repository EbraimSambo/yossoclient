"use client"
import { MainProps } from '../../config/interfaces/interfaces'
import React, { useRef } from 'react'
import NavBar from './bases/NavBar'
import Footer from './bases/Footer'
import { LayoutBox, MainContent } from './bases/styled'
import TransitionPage from './bases/partials/TransitionPage'
import { useAuthPath } from '@/hooks/main'

const MainLayout: React.FC<MainProps> = ({ children }) => {
    const {veryPath} = useAuthPath()
    const refNavbar = useRef(null)
    return (
        <div ref={refNavbar}>
            <TransitionPage />
            <LayoutBox>
                {!veryPath && <NavBar target={refNavbar} />}
                <MainContent component={"main"} >
                    {children}
                </MainContent>
                {!veryPath && <Footer />}
            </LayoutBox>
        </div>
    )
}

export default MainLayout