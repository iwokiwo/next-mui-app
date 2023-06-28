'use client'
import { Grid, Box, Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
// components
import SalesOverview from '@/app/(DashboardLayout)/components/dashboard/SalesOverview';
import YearlyBreakup from '@/app/(DashboardLayout)/components/dashboard/YearlyBreakup';
import RecentTransactions from '@/app/(DashboardLayout)/components/dashboard/RecentTransactions';
import ProductPerformance from '@/app/(DashboardLayout)/components/dashboard/ProductPerformance';
import Blog from '@/app/(DashboardLayout)/components/dashboard/Blog';
import MonthlyEarnings from '@/app/(DashboardLayout)/components/dashboard/MonthlyEarnings';
import MonthlySummary from "@/app/(DashboardLayout)/components/dashboard/MonthlySummary";

const Dashboard = () => {
    return (
        <PageContainer title="Dashboard" description="this is Dashboard">
             <Box sx={{ flexGrow: 1 }}>
             <Grid item xs={12} lg={12}>
                <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={12}>
                        <Typography
                            variant="h1"
                            sx={{
                                background: "linear-gradient(45deg, #ffffff , #C83333 20%)",
                                backgroundClip: "text",
                                WebkitBackgroundClip: "text",
                                color: "transparent",

                            }}
                        >
                            Dasboard
                        </Typography>
                    </Grid>
                    <Grid item xs={4} sm={4} md={3} >
                        <MonthlySummary title="Sales" amount="Rp 50.000" percentage="6%" />
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


                <Grid item xs={12} lg={12}>
                    <Typography
                        variant="h1"
                        sx={{
                            background: "linear-gradient(45deg, #ffffff , #C83333 30%)",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            color: "transparent",
                            m: 2
                        }}
                    >
                        Static Overview
                    </Typography>
                </Grid>
                <Grid item xs={12} lg={12}>
                    <SalesOverview />
                </Grid>
                <Grid item xs={12} lg={12}>
                    <Typography
                        variant="h1"
                        sx={{
                            background: "linear-gradient(45deg, #ffffff , #C83333 20%)",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            color: "transparent",
                            m: 2
                        }}
                    >
                        Top Sales
                    </Typography>
                </Grid>
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
