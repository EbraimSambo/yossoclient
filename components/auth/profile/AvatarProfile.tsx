import { Avatar, Box } from '@mui/material'
import React from 'react'

const AvatarProfile = ({name}:{name:string}) => {
  return (
    <Box sx={{width: "200px", height: "200px"}}>
        <Avatar sx={{width: "100%", height: "100%", borderRadius: 2, fontSize: 30}} > {name[0]} </Avatar>
    </Box>
  )
}

export default AvatarProfile