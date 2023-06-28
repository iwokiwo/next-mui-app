
import React from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from '@mui/material/styles';
import { Stack, Typography, Avatar, Fab, Grid, Box } from '@mui/material';
import { IconArrowDownRight, IconCurrencyDollar, IconArrowUpRight } from '@tabler/icons-react';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import { colors } from "@/asset";
import {ModalConfirmProps} from "@/app/(DashboardLayout)/components/shared/modal-confirm/modal-confirm.props";


interface IMonthlySummary {
    title: string,
    amount: string,
    percentage : string
}

const MonthlySummary = (props: IMonthlySummary)  => {
  // chart color
  const theme = useTheme();
  const secondary = theme.palette.success.main;
  // const secondary = theme.palette.secondary.main;
  const secondarylight = colors.text.primary;
  const errorlight = '#fdede8';
  const {title, percentage,amount} = props

  // chart
  const optionscolumnchart: any = {
    chart: {
      type: 'area',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 60,
      sparkline: {
        enabled: true,
      },
      group: 'sparklines',
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    fill: {
      //colors: [secondarylight],
      type: 'solid',
      opacity: 0,
    },
    markers: {
      size: 0,
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
    },
  };
  const seriescolumnchart: any = [
    {
      name: '',
      color: secondary,
      data: [25, 66, 20, 40, 12, 58, 20],
    },
  ];

  return (
    <DashboardCard
      title={title}
      action={
        // <Fab color="secondary" size="medium" sx={{ color: '#ffffff' }}>
        //   <IconCurrencyDollar width={24} />
        // </Fab>
        <>x</>
      }
      footer={
        <>
        
            <Grid container spacing={1}>
              <Grid item xs={8}>
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignContent: 'flex-start',
                    m: 1,
                 
                    // bgcolor: 'background.paper',
                    // maxWidth: 380,
                    // height: 200,
                    borderRadius: 1,
                  }}
                >
                  <Box >

                      <IconArrowUpRight width={20} color={colors.success.primary} />

                  </Box>
                  <Box sx={{ml: 1}}>
                    <Typography color={colors.success.primary} variant="subtitle2" fontWeight="600">
                      {percentage}
                    </Typography>
                  </Box>
                  <Box sx={{ml: 1}}>
                    <Typography variant="subtitle2" color="textSecondary">
                      vs last month
                    </Typography>
                  </Box>

                </Box>

              </Grid>
              <Grid item xs={4}>
                <Chart options={optionscolumnchart} series={seriescolumnchart} type="area" height="60px" />
              </Grid>

            </Grid>
        


        </>
      }
    >
      <>
        <Typography variant="h3" fontWeight="700" mt="-20px">
          {amount}
        </Typography>
        {/* <Stack direction="row" spacing={1} my={1} alignItems="center">
          <Avatar sx={{ bgcolor: errorlight, width: 27, height: 27 }}>
            <IconArrowDownRight width={20} color="#FA896B" />
          </Avatar>
          <Typography variant="subtitle2" fontWeight="600">
            +9%
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            last year
          </Typography>
        </Stack> */}
      </>
    </DashboardCard>
  );
};

export default MonthlySummary;
