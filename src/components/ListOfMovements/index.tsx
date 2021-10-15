import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { format } from 'date-fns';
import Movement from '../../models/Movement';
import classes from './styles.module.scss';
import { useAppSelector } from '../../store';
import { PATHS } from '../../config/constants';
import { useHistory } from 'react-router';
import { Typography } from '@mui/material';

const ListOfMovements = () => {
    const history = useHistory();
    const movements = useAppSelector(state => state.movements.movements);

    return (
        <List className={classes.listOfMovements} disablePadding>
            {movements?.map((movement: Movement) => {
                const price = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(movement.amount);
                const date = format(new Date(movement.dateTime), 'dd/MM/yyyy');
                const color = movement.category?.type === 'expense' ? 'error' : 'green';

                return (
                    <ListItem key={movement.id} className={classes.listItem} disablePadding>
                        <ListItemButton onClick={() => history.push(PATHS.movementDetails(movement.id))}>
                            <ListItemText
                                primary={movement.description}
                                secondary={movement.category?.description}
                            />
                            <ListItemText
                                primary={<Typography color={color} component="span">{price}</Typography>}
                                secondary={date}
                                className={classes.secondaryListItemText}
                            />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );
};

export default ListOfMovements;
