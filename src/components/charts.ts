import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'top' as const,
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
    },
  };

  interface Dataset {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
  }

  interface dataChart {
    labels: string[],
    datasets: Dataset[]
  }
  
  
    export const chartData: dataChart = {
    labels: [
      "5k", "10k", "15k", "20k", "25k", "30k", "35k", "40k", "45k", "50k"
    ],
    datasets: [
      {
        label: "steps",
        data: [20, 10, 40, 60, 80, 100],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      }
    ]
  }