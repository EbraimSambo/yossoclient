import React from 'react'
import NextTopLoader from 'nextjs-toploader';
import { Box, CircularProgress } from '@mui/material';
const TransitionPage = () => {
    return (
        <div>
            <NextTopLoader
                color="#001265"
                crawlSpeed={200}
                height={3}
                crawl={true}
                showSpinner={false}
                easing="ease"
                speed={200}
                zIndex={1600}
                showAtBottom={false}
                
            />
        </div>
    )
}

export default TransitionPage

const CircularIndeterminate = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CircularProgress />
        </Box>
    );
}