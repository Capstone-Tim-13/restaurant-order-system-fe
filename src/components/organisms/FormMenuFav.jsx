import ListMenuFav from "../atoms/ListMenuFav";
import DropDownK from "../atoms/DropDownK";

export default function FormMenuFav() {
  return (
    <div className="w-full h-full bg-white rounded-xl font-bold shadow-lg grid py-7 px-9 place-items-start">
      <div className="flex flex-col w-full gap-1">
        <div className="flex justify-between">
        <div className="text-xl font-semibold">Menu Favorit
        <div className="text-xs font-light text-gray-500">
          Trending Menu Bulan November
        </div></div>
        <div><DropDownK/></div>
        </div>
        <ListMenuFav/>
      </div>
    </div>
  );
}
