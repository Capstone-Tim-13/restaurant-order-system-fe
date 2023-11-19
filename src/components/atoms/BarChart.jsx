import Chart from 'chart.js/auto';
import { useEffect, useRef } from 'react';

const formatRupiah = (value) => {
  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  });
  return formatter.format(value);
};


export default function BarChart({ selectedOption }) {
  const chartRef = useRef(selectedOption);
  const chartInstance = useRef(null); // Simpan referensi ke instance diagram.

  useEffect(() => {
    console.log('Selected Option:', selectedOption);

    const DATA_COUNT = 12;
    const labels = [
      'Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'
    ]

    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Pemasukan',
          data: Array.from({ length: DATA_COUNT }, () => Math.random() * 200),
          backgroundColor: '#783525',
          borderWidth: 2,
          borderRadius: Number.MAX_VALUE,
          borderSkipped: "bottom",
        },
      ],
    };

    const config = {
      type: 'bar',
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        },
        elements: {
          bar: {
            cubicInterpolationMode: 'monotone',
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: (value) => formatRupiah(value),
            },
          },
        },
      },
    };

    const ctx = chartRef.current.getContext('2d');

    // Hancurkan instance sebelumnya jika ada
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Inisialisasi diagram baru
    chartInstance.current = new Chart(ctx, config);

    // Pastikan untuk menghancurkan diagram saat komponen tidak lagi digunakan
    return () => {
      chartInstance.current.destroy();
    };
  }, [selectedOption]);

  return (
    <canvas ref={chartRef} width={100} height={50}></canvas>
  );
}