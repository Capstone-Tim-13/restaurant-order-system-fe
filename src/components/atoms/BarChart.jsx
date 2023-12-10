import Chart from 'chart.js/auto';
import { useEffect, useRef } from 'react';

const formatRupiah = (value) => {
  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  });
  return formatter.format(value);
};


export default function BarChart({ selectedOption, laporan }) {
  const chartRef = useRef(null);
  const chartInstance = useRef(null); // Simpan referensi ke instance diagram.

  useEffect(() => {
    const data = {
      labels:
        selectedOption === 'bulan' ? laporan?.bulan.label : laporan?.tahun.label,
      datasets: [
        {
          label: 'Pemasukan',
          data:
            selectedOption === 'bulan'
              ? laporan?.bulan.data
              : laporan?.tahun.data,
          backgroundColor: '#783525',
          borderWidth: 2,
          borderRadius: Number.MAX_VALUE,
          borderSkipped: 'bottom',
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