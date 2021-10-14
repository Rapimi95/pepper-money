import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
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
            <ListItemButton className={classes.listItem} onClick={() => history.push(PATHS.categories)}>
                <ListItemIcon className={classes.listItemIcon}>
                    <CategoryIcon />
                </ListItemIcon>
                <ListItemText primary="Categorías" />
            </ListItemButton>
        </List>
    );
};

export default SidebarMenu;
