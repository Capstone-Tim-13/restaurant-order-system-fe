import { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import 'primereact/resources/themes/lara-light-indigo/theme.css';

export default function ChartPenjualan({ datas }) {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const data = {
      labels: Array.from({ length: 30 }, (_, i) => i + 1),
      datasets: [
        {
          label: 'Pendapatan',
          data: datas,
          fill: true,
          borderColor: '#4D0F27',
          tension: 0.5,
          backgroundColor: '#A24E4585',
        },
      ],
    };
    const options = {
      maintainAspectRatio: false,
      aspectRatio: 0.7,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            usePointStyle: true,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: '#000',
          },
        },
        y: {
          ticks: {
            color: '#000',
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, [datas]);

  return (
    <div className="bg-white w-[700px]">
      <Chart type="line" data={chartData} options={chartOptions} />
    </div>
  );
}
