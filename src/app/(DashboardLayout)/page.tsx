'use client'
import { Grid, Box, Typography, Button, Stack, BottomNavigation, BottomNavigationAction } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
// components
import SalesOverview from '@/app/(DashboardLayout)/components/dashboard/SalesOverview';
import YearlyBreakup from '@/app/(DashboardLayout)/components/dashboard/YearlyBreakup';
import RecentTransactions from '@/app/(DashboardLayout)/components/dashboard/RecentTransactions';
import ProductPerformance from '@/app/(DashboardLayout)/components/dashboard/ProductPerformance';
import Blog from '@/app/(DashboardLayout)/components/dashboard/Blog';
import MonthlyEarnings from '@/app/(DashboardLayout)/components/dashboard/MonthlyEarnings';
import MonthlySummary from "@/app/(DashboardLayout)/components/dashboard/MonthlySummary";
import URBS from './components';
import React from 'react';
import {useStyles} from "@/utils/theme/Global.styles";
import {CalendarMonth, Download} from "@mui/icons-material";
import {colors} from "@/utils/theme/DarkColors";

const Dashboard = () => {
    const matches = useMediaQuery('(min-width:600px)');
    const classes = useStyles()
    return (
        <PageContainer title="Dashboard" description="this is Dashboard">
            <Box sx={{ flexGrow: 1 }}>
               <URBS.Header
                   title="Dashboard"
                   menu={true}
               />
               <URBS.HeaderMenu>
                <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                    <Grid item xs={12} sm={6} md={6}>
                        <Stack spacing={2} direction="row" sx={{ml: -2}}>
                            <Button variant="outlined" className={classes.buttonOutlined}><Typography color={colors.text.primary}>Daily</Typography></Button>
                            <Button variant="outlined" className={classes.buttonOutlined}><Typography color={colors.text.primary}>Weekly</Typography></Button>
                            <Button variant="outlined" className={classes.buttonOutlined}><Typography color={colors.text.primary}>Monthly</Typography></Button>
                            <Button variant="outlined" className={classes.buttonOutlinedSelect}> <Typography color={colors.text.o25}>Yearly</Typography></Button>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>

                        <Stack spacing={2} direction="row" sx={{justifyContent: matches? 'flex-end':'flex-start'}}>
                        <Button variant="outlined" className={classes.buttonOutlined} endIcon={<CalendarMonth sx={{color: colors.text.primary}}/>}><Typography className={classes.typography}>Custome Date</Typography></Button>
                               <Button variant="contained"className={classes.buttonContained} endIcon={<Download />}> <Typography className={classes.typography}>Download</Typography></Button>

                        </Stack>
                    </Grid>


                </Grid>
               </URBS.HeaderMenu>

                <Grid item xs={12} lg={12}>
                    <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                        <Grid item xs={4} sm={4} md={3} >
                            <MonthlySummary title="Sales" amount=" 50.000" percentage="6%" />
                        </Grid>
                        <Grid item xs={4} sm={4} md={3} >
                            <MonthlySummary title="New Sales" amount="Rp 50.000" percentage="6%" />
                        </Grid>
                        <Grid item xs={4} sm={4} md={3} >
                            <MonthlySummary title="New Customer" amount="Rp 50.000" percentage="6%" />
                        </Grid>
                        <Grid item xs={4} sm={4} md={3} >
                            <MonthlySummary title="Transaction" amount="Rp 50.000" percentage="6%" />
                        </Grid>
                        <Grid item xs={4} sm={4} md={3} >
                            <MonthlySummary title="Average Per Transaction" amount="Rp 50.000" percentage="6%" />
                        </Grid>
                        <Grid item xs={4} sm={4} md={3} >
                            <MonthlySummary title="Average Per Day" amount="Rp 50.000" percentage="6%" />
                        </Grid>
                    </Grid>

                </Grid>
                <Box sx={{pt : 2, pb: 2}}>
                <URBS.Header title="Static Overview" />
                </Box>
                <Grid item xs={12} lg={12}>
                    <SalesOverview />
                </Grid>
                <Box sx={{pt : 2, pb: 2}}>
                <URBS.Header title="Top Sales" />
                </Box>
                {/*<Grid item xs={12} lg={4}>*/}
                {/* <Grid container spacing={3}>*/}
                {/*  <Grid item xs={12}>*/}
                {/*     <YearlyBreakup />*/}
                {/*    </Grid>*/}
                {/*    <Grid item xs={12}>*/}
                {/*      <MonthlyEarnings />*/}
                {/*    </Grid>*/}
                {/*  </Grid>*/}
                {/*</Grid>*/}
                <Grid item xs={12} lg={12}>
                    <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                        <Grid item xs={12} sm={5} md={6}>
                            <ProductPerformance />
                        </Grid>
                        <Grid item xs={12} sm={5} md={6}>
                            <ProductPerformance />
                        </Grid>
                        <Grid item xs={12} sm={5} md={6}>
                            <ProductPerformance />
                        </Grid>
                        <Grid item xs={12} sm={5} md={6}>
                            <ProductPerformance />
                        </Grid>

                    </Grid>
                </Grid>

                {/*<Grid item xs={12} lg={8}>*/}
                {/*<ProductPerformance />*/}
                {/*</Grid>*/}
                {/*<Grid item xs={12}>*/}
                {/*<Blog />*/}
                {/*</Grid>*/}

            </Box>
        </PageContainer>
    )
}

export default Dashboard;
