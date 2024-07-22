import { Alert, Typography } from "@mui/material"
import React from "react"



export const LabelForm = ({children}:{children:React.ReactNode})=>{
    return(
        <Typography  sx={{fontSize: 12,color: "#001265"}}> {children} </Typography>
    )
}


export const ErrorForm = ({children}:{children:React.ReactNode})=>{
    return(
        <Typography fontSize={11} color={"error"}> {children} </Typography>
    )
}

export const AlertErrorForm = ({children}:{children:React.ReactNode})=>{
    return(
        <Alert component={"span"} sx={{fontSize: 12, display: "flex", alignItems: "center"}} severity="error">{children} </Alert>
    )
}