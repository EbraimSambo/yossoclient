"use client"
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import CardCourse from '../course/Card'
import { courses } from '@/utils/contents/data'

const Courses = () => {
    return (
        <Box>
            <Typography component={"h2"} variant='h4' > Cursos em Destaques </Typography>
            <Grid component={"ul"} container mt={2} width={"100%"} spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}>
                {courses.slice(0,6).map((course, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <CardCourse course={course} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default Courses