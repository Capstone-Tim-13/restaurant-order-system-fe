export default function Button() {
  return (
    <div className="w-max h-full bg-white py-2 px-2 shadow-lg grid rounded-3xl">
    <div className="flex  gap-2">
      <button className="bg-white hover:bg-brown text-gray-500 hover:text-white font-normal py-2 px-4 rounded-full">
        Semua Kategori
      </button>
      <button className="bg-white hover:bg-brown text-gray-500 hover:text-white font-normal py-2 px-4 rounded-full">
        Appertizer
      </button>
      <button className="bg-white hover:bg-brown text-gray-500 hover:text-white font-normal py-2 px-4 rounded-full">
        Dessert
      </button>
      <button className="bg-white hover:bg-brown text-gray-500 hover:text-white font-normal py-2 px-4 rounded-full">
        Ala Carte
      </button>
      <button className="bg-white hover:bg-brown text-gray-500 hover:text-white font-normal py-2 px-4 rounded-full">
        Paket Hemat
      </button>
      <button className="bg-white hover:bg-brown text-gray-500 hover:text-white font-normal py-2 px-4 rounded-full">
        Minum
      </button>
    </div>
  </div>
  )
}
