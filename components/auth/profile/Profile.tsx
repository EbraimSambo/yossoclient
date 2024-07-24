"use client"
import React from 'react'
import DescProfile from './DescProfile'
import { useUser } from '@/hooks/queries'
import BasicTabs from './Tabs'
import { ProfileContainer } from './styledProfile'


const Profile = ({slug}:{slug:string}) => {
    const {data:user,isLoading} = useUser(slug)
    if(isLoading) return <div>Loading...</div>
  return (
    <ProfileContainer boxShadow={4}>
        <DescProfile user={user!} />
        <BasicTabs />
    </ProfileContainer>
  )
}

export default Profile