import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import classes from './styles.module.scss';
import { Drawer } from '@mui/material';
import { useState } from 'react';
import SidebarMenu from '../SidebarMenu';

const TopNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const toggleDrawer = () => {
        setIsMenuOpen((prevState: boolean) => !prevState);
    };

    return (
        <AppBar position="static">
            <Drawer
                anchor="left"
                open={isMenuOpen}
                onClose={toggleDrawer}
            >
                <SidebarMenu />
          </Drawer>
            <Toolbar>
                <IconButton onClick={toggleDrawer} edge="start" color="inherit" className={classes.menuButton}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Pepper Money
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default TopNavbar;
