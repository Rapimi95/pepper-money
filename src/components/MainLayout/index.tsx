import { ReactNode } from 'react';
import BottomNavbar from '../BottomNavbar';
import TopNavbar from '../TopNavbar';
import classes from './styles.module.scss';

type MainLayoutProps = {
    children: ReactNode,
};

const MainLayout = ({ children }: MainLayoutProps ) => {
  return (
      <div className={classes.root}>
        <TopNavbar />
        {children}
        <BottomNavbar />
      </div>
  );
};

export default MainLayout;