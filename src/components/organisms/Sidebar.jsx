import { Link } from 'react-router-dom';
import { LOGO_ALTARESTO } from '../../assets';
import NavLink from '../molecules/NavLink';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/slices/authSlice';
import { notifySuccess } from '../atoms/Toast';
import { useViewport } from '../../hooks/useViewport';
import { useToggle } from '../../hooks/useToggle';
import { IoIosArrowForward } from 'react-icons/io';
import cn from '../../utils/cn';

export default function Sidebar({ dataLinks }) {
  const dispatch = useDispatch();
  const { isDesktop, height } = useViewport();
  const { isOpen, toggle } = useToggle(isDesktop ? false : true);

  const renderLinks = () => {
    return dataLinks
      ?.filter((item) => item.title !== 'Logout')
      ?.map((item, index) => (
        <NavLink key={index} id={`navlink-${index + 1}`} dataLink={item} />
      ));
  };

  const renderLogoutLink = () => {
    const logoutLink = dataLinks?.find((item) => item.title === 'Logout');

    if (logoutLink) {
      return (
        <NavLink
          id="navlink-logout"
          dataLink={logoutLink}
          onClick={() => {
            dispatch(logout());
            notifySuccess('Logout Success', 'logout');
          }}
        />
      );
    }

    return null;
  };

  return (
    <div className={cn('top-0 h-screen z-30', !isDesktop ? 'fixed' : 'sticky')}>
      {!isOpen && !isDesktop && (
        <span className="w-screen h-screen absolute bg-black/30 backdrop-blur-sm z-0"></span>
      )}
      <button
        className={cn(
          'p-3 bg-white rounded-full w-max absolute -right-5 shadow-md top-12 transition-all duration-300 z-30 hover:shadow-none',
          isOpen ? 'translate-x-8 border-2 border-primary' : 'translate-x-0'
        )}
        onClick={toggle}>
        <IoIosArrowForward
          size={20}
          className={cn(
            'transition-all duration-300 text-primary',
            isOpen ? 'rotate-0' : 'rotate-180'
          )}
        />
      </button>
      <div
        className={cn(
          'transition-all duration-300 bg-secondary h-full flex flex-col flex-1 w-full relative z-10',
          isOpen ? 'max-w-0 overflow-hidden' : 'max-w-[346px]'
        )}
        id="sidebar">
        <Link
          to="/admin"
          className="flex justify-center items-center p-5 pt-9"
          id="logo">
          <img
            src={LOGO_ALTARESTO}
            alt="Logo Alta-Resto"
            className="w-[200px]"
          />
        </Link>
        <div
          className={cn(
            'ml-8 flex flex-col gap-4 justify-between py-8 h-full transition-all duration-300',
            isOpen ? 'opacity-0' : 'opacity-100'
          )}>
          <div
            className={cn('flex flex-col gap-4', {
              'max-h-[50vh] overflow-y-auto shadow-inner-1': height <= 650,
            })}>
            {renderLinks()}
          </div>
          {renderLogoutLink()}
        </div>
      </div>
    </div>
  );
}
