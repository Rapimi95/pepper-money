import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useAppDispatch } from "../../store/hooks";
import { openAddExpensesModal } from "../../store/slices/movementsSlice";
import classes from './styles.module.scss';

const MovementsFloatingActionButton = () => {
    const dispatch = useAppDispatch()

    return (
        <div className={classes.root}>
            <Fab color="primary" onClick={() => dispatch(openAddExpensesModal())}>
                <AddIcon />
            </Fab>
        </div>
    );
};

export default MovementsFloatingActionButton;
