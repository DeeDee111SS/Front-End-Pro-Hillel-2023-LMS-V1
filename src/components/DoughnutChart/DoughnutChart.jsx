import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { doughnutChartData } from '../../utils/CHART_DATA';
import Title from '../Title';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['0 - 25 points', '25 - 50 points', '50 - 75 points', '75 - 100 points'],
  datasets: [
    {
      label: '',
      data: doughnutChartData,
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 122, 1)',
        'rgba(54, 162, 235, 1)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 0.2)',        
        'rgba(255, 206, 86, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(75, 192, 192, 0.2)',
      ],
    borderWidth: 1,
  },
],
};

export const options = {
  
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
      text: 'Homeworks quality',
    },
  },
};

export default function DoughnutChart() {
return (
  <React.Fragment>
    <Title>Homeworks quality</Title>
    <Doughnut options={options} data={data} />
  </React.Fragment>
)

;
}
