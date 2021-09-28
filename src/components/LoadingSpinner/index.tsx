import CircularProgress from '@mui/material/CircularProgress';
import classes from './styles.module.scss';

const LoadingSpinner = () => {
    return (
        <div className={classes.root}>
            <CircularProgress />
        </div>
    );
};

export default LoadingSpinner;