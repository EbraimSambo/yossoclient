import React from 'react'
import AvatarProfile from './AvatarProfile'
import { Box } from '@mui/material'
import Content from './Content'
import { User } from '@/config/auth/types'

const DescProfile = ({user}:{user:User}) => {
  return (
    <Box >
        <AvatarProfile name={user.firstName} />
        <Content
         email={user.email}
         name={`${user.firstName} ${user.lastName}`}
         phone={user.profile.phone} 
         createAt={user.createAt}
         />
    </Box>
  )
}

export default DescProfile