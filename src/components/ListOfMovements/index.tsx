import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { format } from 'date-fns';
import Movement from '../../models/Movement';
import Category from '../../models/Category';
import classes from './styles.module.scss';
import { useAppSelector } from '../../store';
import { PATHS } from '../../config/constants';
import { useHistory } from 'react-router';

const ListOfMovements = () => {
    const history = useHistory();
    const movements = useAppSelector(state => state.movements.movements);
    const categories = useAppSelector(state => state.categories.categories);

    return (
        <List className={classes.listOfMovements} disablePadding>
            {movements?.map((movement: Movement) => (
                <ListItem key={movement.id} className={classes.listItem} disablePadding>
                    <ListItemButton onClick={() => history.push(PATHS.movementDetails(movement.id))}>
                        <ListItemText
                            primary={movement.description}
                            secondary={categories?.find((category: Category) => category.id === movement.categoryId)?.description}
                        />
                        <ListItemText
                            primary={new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(movement.amount)} 
                            secondary={format(new Date(movement.dateTime), 'dd/MM/yyyy')}
                            className={classes.secondaryListItemText}
                        />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    );
};

export default ListOfMovements;
