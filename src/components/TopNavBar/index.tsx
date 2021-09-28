import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import classes from './styles.module.scss';

const TopNavBar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                {/* <IconButton edge="start" color="inherit" className={classes.menuButton}>
                    <MenuIcon />
                </IconButton> */}
                <Typography variant="h6" className={classes.title}>
                    Pepper Money
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default TopNavBar;
