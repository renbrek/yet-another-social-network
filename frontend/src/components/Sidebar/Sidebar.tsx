import clsx from 'clsx';
import type { NextComponentType, NextPageContext } from 'next';
import SidebarItem from './SidebarItem';
import styles from './Sidebar.module.css';
import {
  Grid,
  Users,
  User,
  MessageSquare,
  Bell,
  Globe,
  Settings,
  LogOut,
} from 'react-feather';

const ItemsData = [
  {
    href: '/feed',
    title: 'Feed',
    icon: <Grid />,
  },
  {
    href: '#',
    title: 'My community',
    icon: <Users />,
  },
  {
    href: '/messages',
    title: 'Messages',
    icon: <MessageSquare />,
  },
  {
    href: '#',
    title: 'Notification',
    icon: <Bell />,
  },
  {
    href: '#',
    title: 'Explore',
    icon: <Globe />,
  },
  {
    href: '/profile',
    title: 'Profile',
    icon: <User />,
  },
  {
    href: '#',
    title: 'Settings',
    icon: <Settings />,
  },
  {
    href: '#',
    title: 'Logout',
    icon: <LogOut />,
  },
];

interface Props {}

const Sidebar: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  return (
    <div className={styles.sidebar}>
      {ItemsData.map((item) => (
        <SidebarItem
          key={item.title}
          href={item.href}
          title={item.title}
          icon={item.icon}
        />
      ))}
    </div>
  );
};

export default Sidebar;
