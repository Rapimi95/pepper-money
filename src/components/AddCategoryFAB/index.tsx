import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import classes from './styles.module.scss';
import { PATHS } from '../../config/constants';
import { useHistory } from 'react-router';

const AddCategoryFAB = () => {
    const history = useHistory();
    
    return (
        <div className={classes.root}>
            <Fab onClick={() => history.push(PATHS.addCategory)} color="primary">
                <AddIcon />
            </Fab>
        </div>
    );
};

export default AddCategoryFAB;
