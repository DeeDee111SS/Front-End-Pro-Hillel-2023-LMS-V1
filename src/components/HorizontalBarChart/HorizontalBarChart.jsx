import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { horizontalBarChartLabels, horizontalBarChartLabelsData } from '../../utils/CHART_DATA';
import MyTitle from '../Title';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 1,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
      text: 'Rating for the course',
    },
  },
  maintainAspectRatio: false,
  layout: {
      padding: {
      bottom: 42,
    },
  }
};

const labels = horizontalBarChartLabels;
const labelsData = horizontalBarChartLabelsData;

export const data = {
  labels,
  datasets: [
    {
      label: 'GPA',
      data: labelsData,
      borderColor: 'rgba(54, 162, 235, 1)',
      backgroundColor: 'rgba(25, 118, 210, 1)', 
    },
    // {
    //   label: 'Dataset 2',
    //   data: labels.map(() =>  Math.floor(Math.random() * (100 - 0 + 1)) + 10),
    //   borderColor: 'rgb(53, 162, 235)',
    //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
    // },
  ],
};

function HorizontalBarChart() {
  return (
    <React.Fragment>
      <MyTitle>Rating for the course</MyTitle>
      <Bar options={options} data={data} height={420}/>
    </React.Fragment>
  );
}

export default HorizontalBarChart;