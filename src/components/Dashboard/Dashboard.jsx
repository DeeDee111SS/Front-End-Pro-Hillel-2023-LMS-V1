import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import JsLessonsList from '../JsLessonsList';
import ReactLessonsList from '../ReactLessonsList';
import DoughnutChart from '../DoughnutChart';
import HorizontalBarChart from '../HorizontalBarChart/HorizontalBarChart';

export default function Dashboard() {

  return (    
    <Grid container spacing={3}>
      {/* DoughnutChart */}
      <Grid item xs={12} md={12} lg={4}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 580,
          }}
        >
          <DoughnutChart />
        </Paper>
      </Grid>
      {/* HorizontalBarChart */}
      <Grid item xs={12} md={12} lg={8}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 580,
          }}
        >
          <HorizontalBarChart />
        </Paper>
      </Grid>
      {/* JsLessonsList */}
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <JsLessonsList />
        </Paper>
      </Grid>
      {/* ReactLessonsList */}
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <ReactLessonsList />
        </Paper>
      </Grid>
    </Grid>    
  );
}