import { BsArrowDown, BsArrowUp } from 'react-icons/bs';
import cn from '../../utils/cn';
import Tooltip from '../atoms/Tooltip';
import {
  MENU_TERJUAL_ICON,
  PELANGGAN_ICON,
  PEMASUKAN_ICON,
  TOTAL_PESANAN_ICON,
} from '../../assets';
import formatCurrency from '../../utils/formatCurrency';

export default function CountStatisticCard({
  icon,
  title,
  count,
  isUp,
  persent,
  daily,
}) {
  const getIcon = (iconNumber) => {
    switch (iconNumber) {
      case 1:
        return MENU_TERJUAL_ICON;
      case 2:
        return TOTAL_PESANAN_ICON;
      case 3:
        return PELANGGAN_ICON;
      case 4:
        return PEMASUKAN_ICON;
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 w-max flex flex-col gap-2 min-w-[250px]">
      <img src={getIcon(icon)} alt="icon" width={26} />
      <div
        className={cn('flex items-center gap-1 ', {
          '[&>svg]:text-green-600': isUp,
          '[&>svg]:text-red-600': !isUp,
        })}>
        {isUp ? <BsArrowUp size={20} /> : <BsArrowDown size={20} />}
        <p className="font-semibold text-[32px]">{formatCurrency(count)}</p>
        <Tooltip title={daily.count}>
          <p
            className={cn('text-[20px]', {
              'text-green-600': isUp,
              'text-red-600': !isUp,
            })}>
            {daily.isUp ? '+' : '-'}
            {daily.persent}%
          </p>
        </Tooltip>
      </div>
      <div className="flex flex-col gap-1">
        <p>{title}</p>
        <p className="text-[12px] text-gray-400">
          {isUp ? '+' : '-'}
          {persent}% dari bulan lalu
        </p>
      </div>
    </div>
  );
}
