import { Box, Typography } from '@mui/material'
import React from 'react'

const AppLogo = ({color}: {color: string}) => {
  return (
    <Box>
        <Typography 
        letterSpacing={2} 
        color={color}
         fontWeight={"900"}
          sx={{textDecoration: "none"}} 
          component={"a"} 
          variant='h2'
           href='/' 
           fontSize={20} 
           >Yosso</Typography>
    </Box>
  )
}

export default AppLogo