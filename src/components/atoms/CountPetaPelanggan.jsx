import { Progress } from '@mantine/core';
import { HiUser } from 'react-icons/hi';
import formatCurrency from '../../utils/formatCurrency';

export default function CountPetaPelanggan({ title, count, persent, color }) {
  return (
    <div className="flex flex-col gap-2 max-w-[150px]">
      <div className="flex items-center gap-2">
        <div
          className="p-2 rounded-full w-max text-white"
          style={{ backgroundColor: color }}>
          <HiUser size={14} />
        </div>
        <p className="font-medium text-gray-500">{title}</p>
      </div>
      <p className="font-bold" style={{ color: color }}>
        {formatCurrency(count)}
      </p>
      <Progress color={color} size="sm" value={persent} />
    </div>
  );
}
