import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useHistory } from 'react-router';
import { PATHS } from '../../config/constants';
import Category from '../../models/Category';
import { useAppSelector } from '../../store';
import classes from './styles.module.scss';

const ListOfCategories = () => {
    const history = useHistory();
    const categories = useAppSelector(state => state.categories.categories);

    return (
        <List className={classes.listOfMovements} disablePadding>
            {categories?.map((category: Category) => (
                <ListItem key={category.id} className={classes.listItem} disablePadding>
                    <ListItemButton
                        onClick={() => history.push(PATHS.categoryDetails(category.id))}
                        className={classes.listButton}
                    >
                        <ListItemText
                            primary={category.description}
                        />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    );
};

export default ListOfCategories;
