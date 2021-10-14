import { ReactNode } from 'react';
import classes from './styles.module.scss';

type BlankLayoutProps = {
    top: ReactNode,
    main: ReactNode,
    bottom: ReactNode,
};

const BlankLayout = ({ top, main, bottom }: BlankLayoutProps ) => {
    return (
        <div className={classes.root}>
            <div className={classes.top}>
                {top}
            </div>

            <div className={classes.main}>
                {main}
            </div>

            <div className={classes.bottom}>
                {bottom}
            </div>
        </div>
    );
};

export default BlankLayout;