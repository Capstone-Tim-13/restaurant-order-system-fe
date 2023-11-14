import ListTopPel from '../atoms/ListTopPel.jsx'

export default function FormTopPel() {
  return (
    <div className="w-full h-full bg-white rounded-xl font-bold shadow-lg grid py-7 px-9 place-items-start">
    <div className="flex flex-col gap-5">
      <div className="text-xl font-semibold">Top Pelanggan</div>
        <ListTopPel/>
    </div>
  </div>
  )
}
