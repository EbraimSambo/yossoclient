import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { ContainerCenter } from '@/components/layout/bases/styled';
import { Box } from '@mui/material';
import { buttonConfig } from '@/components/_ui/Global';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

export default function UploadCover() {
    return (
        <ContainerCenter >
            <Box>
                <Box>
                    <ContainerCenter sx={{ boxShadow: 2, p: 1, width: "200px",height: "30vh", m: ".3rem 0" }}>
                        <Button
                            component="label"
                            role={undefined}
                            variant="contained"
                            tabIndex={-1}
                            startIcon={<CloudUploadIcon />}
                        >
                            Upload file
                            <VisuallyHiddenInput type="file" />
                        </Button>
                    </ContainerCenter>
                </Box>
                <ContainerCenter>
                    <Button type='submit' sx={buttonConfig} variant='contained'>Editar</Button>
                </ContainerCenter>
            </Box>
        </ContainerCenter>
    );
}
