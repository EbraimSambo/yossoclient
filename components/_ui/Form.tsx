import { Typography } from "@mui/material"
import React from "react"



export const LabelForm = ({children}:{children:React.ReactNode})=>{
    return(
        <Typography  sx={{fontSize: 12,color: "#001265"}}> {children} </Typography>
    )
}