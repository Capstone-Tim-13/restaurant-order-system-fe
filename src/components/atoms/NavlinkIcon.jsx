import cn from '../../utils/cn';

export default function NavlinkIcon({ isActive, icon }) {
  return (
    <div
      className={cn(
        'p-[14px] grid place-items-center w-max h-max rounded-full',
        { 
          'bg-white': isActive,
          'bg-primary': !isActive,
        }
      )}>
      <img
        src={isActive ? icon.active : icon.default}
        alt="icon"
        className="w-5 h-5"
      />
    </div>
  );
}
