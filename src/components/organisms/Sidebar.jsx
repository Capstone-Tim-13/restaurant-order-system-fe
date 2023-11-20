import { Link } from 'react-router-dom';
import { LOGO_ALTARESTO } from '../../assets';
import NavLink from '../molecules/NavLink';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/slices/authSlice';
import { notifySuccess } from '../atoms/Toast';

export default function Sidebar({ dataLinks }) {
  const dispatch = useDispatch();

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
    <div
      className="bg-secondary max-w-[346px] h-screen flex flex-col flex-1 sticky top-0 z-30"
      id="sidebar">
      <Link
        to="/admin"
        className="flex justify-center items-center p-5 pt-9"
        id="logo">
        <img src={LOGO_ALTARESTO} alt="Logo Alta-Resto" className="w-[250px]" />
      </Link>
      <div className="ml-8 flex flex-col justify-between py-8 h-full">
        <div className="flex flex-col gap-4">{renderLinks()}</div>
        {renderLogoutLink()}
      </div>
    </div>
  );
}
