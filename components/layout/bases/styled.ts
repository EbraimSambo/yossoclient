import { Box, styled } from "@mui/material";

export const LayoutBox = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    gap: 4,
    height: "100vh",
    letterSpacing: ".2rem"
})

export const MainContent = styled(Box)({
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    maxWidth: "1200px",
    width: "100%",
    padding: "2rem",
    margin: "0 auto",
    marginTop: "4rem"
})

export const FooterBox = styled(Box)(({ theme }) => ({
    // display: "flex",
    // flexDirection: "column",
    // alignItems: "center",
    // gap: 2,
    padding: "2rem",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.light,
}))

export const NavbarBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.dark,
    gap: 2,
    padding: "0 2rem",
}))

export const ContainerBetween = styled(Box)(({ theme }) => ({
    display: "flex",
    // alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
        justifyContent: "flex-start",
        flexDirection: "column",
        gap: "1rem"
    }
}))

export const ContainerCenter = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}))