import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box, Typography } from '@mui/material';
import { media } from '@/utils/contents/data';
import Link from 'next/link';
const Social = () => {
  return (
    <Box sx={{ display: "flex", gap: ".3rem", flexDirection: "column", }}>
      <Typography component={"p"} variant='body1' fontSize={12}> Nossas redes</Typography>
      <Box sx={{ display: "flex", alignContent: "center", gap: 2, }}>
        {media.map((icon, index)=>(
          <Link style={{color: "#fff"}} key={index} target='_blank' href={icon.url}>
            {icon.icon}
          </Link>
        ))}
      </Box>
    </Box>
  )
}

export default Social