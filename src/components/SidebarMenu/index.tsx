import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { useHistory } from 'react-router';
import { PATHS } from '../../config/constants';
import classes from './styles.module.scss';

const SidebarMenu = () => {
    const history = useHistory();

    return (
        <List component="nav" className={classes.root}>
            <ListItemButton className={classes.listItem} onClick={() => history.push(PATHS.movements)}>
                <ListItemIcon className={classes.listItemIcon}>
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Inicio" />
            </ListItemButton>
        </List>
    );
};

export default SidebarMenu;
