import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import classes from './styles.module.scss';
import { useHistory } from 'react-router';
import { PATHS } from '../../config/constants';

const AddMovementFAB = () => {
    const history = useHistory()

    return (
        <div className={classes.root}>
            <Fab color="primary" onClick={() => history.push(PATHS.addMovement)}>
                <AddIcon />
            </Fab>
        </div>
    );
};

export default AddMovementFAB;
