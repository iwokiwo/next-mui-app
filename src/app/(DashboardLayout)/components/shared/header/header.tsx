/**
 * @author I Wayan Bayu Nugroho
 * @email iwokiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */


import {AppBar, Button, Card, Grid, IconButton, Stack, styled, Toolbar, Typography, useTheme} from "@mui/material";
import React from "react";
import {Add, DeleteOutline, FormatListBulleted, Notifications} from "@mui/icons-material";

type Props = {
    title?: string;
    menu?: boolean;
};

const Header = ({title, menu =false }: Props) => {
    const theme = useTheme();

    return (
        <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={12} sm={6} md={6}>
            <Stack spacing={2} direction="row" sx={{mb: 0}}>
                <Typography
                    variant="h1"
                    sx={{
                        background: "linear-gradient(45deg, #ffffff , #C83333 90%)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                        mt: 1

                    }}
                >
                    {title}
                </Typography>
            </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={6} sx={{mb: 2}}>


                {menu &&
                    <Stack spacing={2} direction="row" sx={{justifyContent: 'flex-end', p: 1.5, mb: 0}}>
                    <IconButton aria-label="delete" size="medium" sx={{colors: theme.palette.text.secondary}}
                                onClick={() => {

                                }}>
                        <FormatListBulleted fontSize="medium" />
                    </IconButton>
                    <IconButton aria-label="delete" size="medium" sx={{colors: theme.palette.text.secondary}}
                                onClick={() => {

                                }}>
                        <Notifications fontSize="medium" />
                    </IconButton>
                    <IconButton aria-label="delete" size="medium" sx={{colors: theme.palette.text.secondary}}
                                onClick={() => {

                                }}>
                        <Add fontSize="medium" />
                    </IconButton>
                </Stack>
                }


        </Grid>
    </Grid>

    );
};

export default Header;
