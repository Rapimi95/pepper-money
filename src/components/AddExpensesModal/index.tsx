import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { closeAddExpensesModal } from '../../store/slices/movementsSlice';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useFormik } from 'formik';
import useDatabase from '../../hooks/useDatabase';
import { addDoc, collection } from '@firebase/firestore';
import { format } from 'date-fns';
import MovementsForm from '../MovementsForm';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import SlideLeftTransition from '../SlideLeftTransition';
import classes from './styles.module.scss';

const AddExpensesModal = () => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const database = useDatabase();
    const isOpen = useAppSelector(state => state.movements.isAddExpensesModalOpen);
    const dispatch = useAppDispatch();
    
    const formik = useFormik({
        initialValues: {
            type: 'expense',
            description: '',
            amount: 0,
            category: '',
            dateTime: new Date(Date.now()),
        },
        onSubmit: async (values) => {
            try {
                const docRef = await addDoc(collection(database, 'movements'), {
                    ...values,
                    dateTime: format(values.dateTime, 'yyyy/MM/dd hh:mm:ss'),
                });
                console.log('Document written with ID: ', docRef.id);
            } catch (e) {
                console.error('Error adding document: ', e);
            }
        },
    });

    const submitForm = () => {
        formik.submitForm();
        dispatch(closeAddExpensesModal());
    };

    return (
        <Dialog
            open={isOpen}
            onClose={() => dispatch(closeAddExpensesModal())}
            fullScreen={fullScreen}
            TransitionComponent={SlideLeftTransition}
            keepMounted
        >
            <DialogTitle>Añadir Movimiento</DialogTitle>
            <DialogContent className={classes.dialogContent}>
                <MovementsForm formik={formik} />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => dispatch(closeAddExpensesModal())} color="primary">
                    Cancelar
                </Button>
                <Button onClick={submitForm} color="primary">
                    Guardar
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddExpensesModal;
