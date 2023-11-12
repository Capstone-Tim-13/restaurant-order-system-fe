import BarChart from "../atoms/BarChart.jsx";
import DropDownB from "../atoms/DropDownB.jsx";

export default function FormLaporan() {
  return (
    <div className="w-full h-full bg-white rounded-xl font-bold shadow-lg grid py-7 px-9 place-items-start">
      <div className="flex flex-col w-full gap-5">
        <div className="text-xl font-semibold flex justify-between">
          Laporan Penjualan
          <div>
            <DropDownB />
          </div>
        </div>
        <BarChart />
      </div>
      <div className="flex flex-col text-lg text-left font-semibold py-3">
        Pendapatan
        <span className="text-xl font-poppins font-bold py-2">Rp 500.000</span>
      </div>
    </div>
  );
}
