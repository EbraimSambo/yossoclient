import { Theme } from "@emotion/react";
import { Box, styled, SxProps } from "@mui/material";

export const InputControl = styled("div")(({theme})=> ({
    display: "flex",
    flexDirection: "column",
    gap: 3,
}))

export const InputContent = styled("div")({
    height: "36px",
    width: "100%",
    border: "1px solid #001265",
    borderRadius: 2
})

export const ControlInputBetween = styled(Box)({
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    gap: 7,
})

export const FormAuth = styled(Box)({
    display: "flex",
    flexDirection: "column",
    gap: 14,
    width: "400px",
    padding: ".8rem"
})

export const InputStyleConfig: SxProps<Theme> | undefined ={
  fontSize: 13,
  height: "100%",
  width: "100%",
  paddingLeft: 1
}
