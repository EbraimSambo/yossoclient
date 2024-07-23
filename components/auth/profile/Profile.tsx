"use client"
import { Box } from '@mui/material'
import React from 'react'
import DescProfile from './DescProfile'
import { useUser } from '@/hooks/queries'
import BasicTabs from './Tabs'

const Profile = ({slug}:{slug:string}) => {
    const {data:user,isLoading} = useUser(slug)
    if(isLoading) return <div>Loading...</div>
  return (
    <Box sx={{p: "1rem", boxShadow: 4, display: "grid",gridTemplateColumns: "20% 80%"}}>
        <DescProfile user={user!} />
        <BasicTabs />
    </Box>
  )
}

export default Profile