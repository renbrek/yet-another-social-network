import type { NextComponentType, NextPageContext } from 'next';
import styles from './Header.module.css';
interface Props {}

const Header: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  return <header className={styles.header}>YASN</header>;
};

export default Header;
