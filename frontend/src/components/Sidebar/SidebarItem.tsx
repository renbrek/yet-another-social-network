import type { NextComponentType, NextPageContext } from 'next';
import Link from 'next/link';
import styles from './SidebarItem.module.css';

interface Props {
  href: string;
  title: string;
  icon?: React.ReactNode;
}

const SidebarItem: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  const { href, title, icon } = props;
  return (
    <Link href={href} className={styles.item}>
      <div>{icon ? icon : null}</div>
      <span>{title}</span>
    </Link>
  );
};

export default SidebarItem;
