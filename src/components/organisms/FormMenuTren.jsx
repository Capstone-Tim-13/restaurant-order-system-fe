import ListMenuTren from "../atoms/ListMenuTren.jsx";

export default function FormMenuTren() {
  return (
    <div className="w-full h-full bg-white rounded-xl font-bold shadow-lg grid py-7 px-9 place-items-start">
      <div className="flex flex-col w-full gap-1">
        <div className="text-xl font-semibold">Menu Trending</div>
        <div className="text-xs font-light text-gray-500">
          Trending Menu Bulan November
        </div>
        <ListMenuTren />
      </div>
    </div>
  );
}
