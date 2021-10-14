import { ReactNode } from 'react';
import TopNavBar from '../TopNavBar';
import classes from './styles.module.scss';

type MainLayoutProps = {
    children: ReactNode,
};

const MainLayout = ({ children }: MainLayoutProps ) => {
  return (
      <div className={classes.root}>
        <TopNavBar />
        {children}
      </div>
  );
};

export default MainLayout;