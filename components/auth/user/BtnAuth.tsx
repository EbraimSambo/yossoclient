import { buttonConfig } from '@/components/_ui/Global'
import { ContainerCenter } from '@/components/layout/bases/styled'
import { Avatar, Button, Skeleton } from '@mui/material'
import React from 'react'
import { Session } from 'next-auth'
import AccountMenu from './MenuUser'
import { useUser } from '@/hooks/queries'

const BtnAuth = ({ session }: { session: Session }) => {
    const { data: user, isLoading } = useUser(session.user.id)
    if (isLoading) return <Skeleton variant="circular"><Avatar /></Skeleton>
    return (
        <AccountMenu user={user!} />
    )
}

export default BtnAuth