import { useDate } from '@/hooks/main'
import { Box, Typography } from '@mui/material'
import React from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
interface Props {
    name: string,
    email: string
    phone: string
    createAt: string
}
const Content: React.FC<Props> = ({ email, name, phone, createAt }) => {
    return (
        <Box mt={1}>
            <Typography sx={config} >
                <AlternateEmailIcon fontSize='small' />
                <span>{name} </span>
            </Typography>
            <Typography sx={config}>
                <AttachEmailIcon fontSize='small' />
                <span>{email}</span>
            </Typography>
            <Typography sx={config}>
                <LocalPhoneIcon fontSize='small' />
                <span>{phone}</span>
            </Typography>
            <Typography sx={config}>
                <CalendarMonthIcon fontSize='small' /> <span>{useDate(createAt)}</span>
            </Typography>
        </Box>
    )
}

export default Content


const config=
    { fontSize: 12, display: "flex", alignItems: "center", gap: ".2rem",mt:1}
