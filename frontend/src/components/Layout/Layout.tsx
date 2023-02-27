import type { NextComponentType, NextPageContext } from 'next';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import styles from './Layout.module.css';

interface Props {
  children?: React.ReactNode;
}

const Layout: NextComponentType<NextPageContext, {}, Props> = ({
  children,
}) => {
  return (
    <>
      <Header />
      <div className={styles.main}>
        <Sidebar />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
