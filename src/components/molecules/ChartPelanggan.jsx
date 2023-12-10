import { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import 'primereact/resources/themes/lara-light-indigo/theme.css';

export default function ChartPelanggan({
  pelangganDatas,
  pelangganBaruDatas,
  penjualanDatas,
}) {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const data = {
      labels: pelangganDatas?.map((item) => item.x),
      datasets: [
        {
          type: 'bar',
          label: 'Pelanggan',
          backgroundColor: '#783525',
          data: pelangganDatas,
          borderWidth: 5,
          borderColor: 'transparent',
          borderRadius: 20,
        },
        {
          type: 'bar',
          label: 'Pelanggan Baru',
          backgroundColor: '#E25E3E',
          data: pelangganBaruDatas,
          borderWidth: 5,
          borderColor: 'transparent',
          borderRadius: 20,
        },
        {
          type: 'bar',
          label: 'Penjualan',
          backgroundColor: '#4D0F27',
          data: penjualanDatas,
          borderWidth: 5,
          borderColor: 'transparent',
          borderRadius: 20,
        },
      ],
    };
    const options = {
      maintainAspectRatio: false,
      aspectRatio: 0.9,
      plugins: {
        tooltips: {
          mode: 'index',
          intersect: false,
        },
        legend: {
          position: 'top',
          labels: {
            usePointStyle: true,
          },
        },
      },
      scales: {
        x: {
          stacked: true,
          ticks: {
            color: '#000',
          },
        },
        y: {
          // stacked: true,
          ticks: {
            color: '#000',
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, [chartData?.length, pelangganBaruDatas, pelangganDatas, penjualanDatas]);

  return (
    <div className="bg-white w-[430px]">
      <Chart type="bar" data={chartData} options={chartOptions} />
    </div>
  );
}
