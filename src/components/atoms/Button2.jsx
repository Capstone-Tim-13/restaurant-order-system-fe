import { notifyError } from './Toast';

export default function ButtonMenu2() {
  return (
    <div
      className="flex justify-end"
      onClick={() =>
        notifyError('Maaf fitur masih dalam tahap pengembangan...')
      }>
      <button className="bg-amber-900 text-white font-bold py-4 px-16 rounded-full mb-4 mt-4 mr-32">
        Unggah File
      </button>
    </div>
  );
}
