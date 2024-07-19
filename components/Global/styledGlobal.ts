import { Box, styled } from "@mui/material";

export const ContentImg = styled(Box)({
    position: "relative"
})


export const ContainerColumn = styled(Box)({
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap: 28
})

export const ContainerCenterGap = styled(Box)((theme) => ({
    display: "flex",
    alignItems: "center",
    gap: 5
  }))

  export const ContainerGrid = styled(Box)((theme) => ({
    display: "flex",
    gridTemplateColumns: "repeat(2,1fr)",
    gap: 20
  }))

export const sxFlexGap = {
  display: "flex",
  alignItems: "center",
  gap:1,
  fontWeight: 600,
  marginTop: 2
}

export const ContainerBetween = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}))
