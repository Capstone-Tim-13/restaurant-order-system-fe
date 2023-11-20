import { Link, useLocation } from 'react-router-dom';
import NavlinkIcon from '../atoms/NavlinkIcon';
import cn from '../../utils/cn';

export default function NavLink({ id, dataLink, onClick }) {
  const pathname = useLocation().pathname;
  const active = pathname === dataLink.link;

  return (
    <Link
      to={dataLink.link}
      id={id}
      onClick={onClick}
      className={cn('flex items-center gap-4 p-3 rounded-l-full text-primary', {
        'bg-primary text-white': active,
      })}>
      <NavlinkIcon icon={dataLink.icon} isActive={active} />
      <p className="text-xl font-medium">{dataLink.title}</p>
    </Link>
  );
}
