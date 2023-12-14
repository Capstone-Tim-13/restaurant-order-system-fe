import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../organisms/Sidebar';
import Topbar from '../organisms/Topbar';
import BgAdminDashboard from '../atoms/BgAdminDashboard';
import {
  ANALISIS_ACTIVE_ICON,
  ANALISIS_ICON,
  DASHBOARD_ACTIVE_ICON,
  DASHBOARD_ICON,
  LOGOUT_ACTIVE_ICON,
  LOGOUT_ICON,
  MENU_ACTIVE_ICON,
  MENU_ICON,
  PESANAN_ACTIVE_ICON,
  PESANAN_ICON,
  RATING_ACTIVE_ICON,
  RATING_ICON,
} from '../../assets';
import { useEffect, useState } from 'react';
import { useViewport } from '../../hooks/useViewport';
import cn from '../../utils/cn';
import LimitMobileScreen from '../molecules/LimitMobileScreen';

export default function AppShell() {
  const pathname = useLocation().pathname;
  const [title, setTitle] = useState('');
  const { isDesktop, isMobile } = useViewport();

  useEffect(() => {
    const queryTitle = dataLinks.find((item) => item.link === pathname)?.title;
    setTitle(queryTitle);
    if (queryTitle) {
      document.title = 'Alta-Resto | ' + queryTitle;
    }
    
  }, [pathname]);

  if (!isMobile) {
    return <LimitMobileScreen />;
  }

  return (
    <div
      className={cn('font-poppins', {
        flex: isDesktop,
      })}>
      <BgAdminDashboard />
      <Sidebar dataLinks={dataLinks} />
      <div className="w-full flex-1">
        <Topbar title={title} />
        <div className="relative z-10 p-3 py-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

const dataLinks = [
  {
    title: 'Dashboard',
    link: '/admin',
    icon: {
      active: DASHBOARD_ACTIVE_ICON,
      default: DASHBOARD_ICON,
    },
  },
  {
    title: 'Analisis',
    link: '/admin/analisis',
    icon: {
      active: ANALISIS_ACTIVE_ICON,
      default: ANALISIS_ICON,
    },
  },
  {
    title: 'Pesanan',
    link: '/admin/pesanan',
    icon: {
      active: PESANAN_ACTIVE_ICON,
      default: PESANAN_ICON,
    },
  },
  {
    title: 'Menu',
    link: '/admin/menu',
    icon: {
      active: MENU_ACTIVE_ICON,
      default: MENU_ICON,
    },
  },
  {
    title: 'Review & Rating',
    link: '/admin/rating',
    icon: {
      active: RATING_ACTIVE_ICON,
      default: RATING_ICON,
    },
  },
  {
    title: 'Logout',
    link: '/login',
    icon: {
      active: LOGOUT_ACTIVE_ICON,
      default: LOGOUT_ICON,
    },
  },
];
