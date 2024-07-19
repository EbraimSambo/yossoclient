import React from 'react'
import { Box, IconButton, Typography } from '@mui/material';
import { media } from '../../../../utils/contents/data';
import LinkApp from '../../../Global/Link';
const Social = () => {
  return (
    <Box sx={{ display: "flex", gap: ".3rem", flexDirection: "column", }}>
      <Typography component={"p"} variant='body1' fontSize={12}> Nossas redes</Typography>
      <Box sx={{ display: "flex", alignContent: "center", }}>
        {media.map((icon, index) => (
          <LinkApp key={index} href={icon.url} target='_blank' >
            <IconButton key={index} sx={{ color: "#fff" }} aria-label={icon.title} >
              {icon.icon}
            </IconButton>
          </LinkApp>
        ))}
      </Box>
    </Box>
  )
}

export default Social