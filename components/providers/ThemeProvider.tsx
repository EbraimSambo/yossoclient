import { Theme } from "../../config/theme/theme";
import { createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";

const ThemeProviderApp  = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {

    return (
        <ThemeProvider theme={Theme}>
            {children}
        </ThemeProvider>
    )

}

export default ThemeProviderApp