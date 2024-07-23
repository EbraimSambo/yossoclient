import { buttonConfig } from '@/components/_ui/Global'
import { ContainerCenter } from '@/components/layout/bases/styled'
import { Button } from '@mui/material'
import React from 'react'
import {signOut} from 'next-auth/react'
import { Session } from 'next-auth'
import AccountMenu from './MenuUser'

const BtnAuth = ({session}:{session:Session}) => {
    return (
        <ContainerCenter>
            {!session?<Button sx={buttonConfig} href='/login' variant='contained' >Conectar-me</Button>:
             <AccountMenu />}
        </ContainerCenter>
    )
}

export default BtnAuth