import { Box, styled } from "@mui/material";

export const ProfileContainer = styled(Box)(({ theme }) => ({
    padding: "1rem", 
     display: "grid",
     gap:"1rem",
    gridTemplateColumns: "25% 75%",
    [theme.breakpoints.down("md")]: {
        gridTemplateColumns: "100%",
    }
}))
