import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { format } from 'date-fns';
import Movement from '../../models/Movement';
import classes from './styles.module.scss';
import useMovements from '../../hooks/useMovements';
import { useAppDispatch } from '../../store/hooks';
import { openExpenseDetailsModal } from '../../store/slices/movementsSlice';

const ListOfMovements = () => {
    const { data: movements } = useMovements();
    const dispatch = useAppDispatch();

    return (
        <List className={classes.listOfMovements} disablePadding>
            {movements?.map((movement: Movement) => (
                <ListItem key={movement.id} className={classes.expenseItem} disablePadding>
                    <ListItemButton onClick={() => dispatch(openExpenseDetailsModal({ ...movement, id: movement.id }))}>
                        <ListItemText primary={movement.description} secondary={movement.category} />
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
