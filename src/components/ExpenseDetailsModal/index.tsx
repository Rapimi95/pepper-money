import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { closeExpenseDetailsModal } from '../../store/slices/movementsSlice';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useFormik } from 'formik';
import useDatabase from '../../hooks/useDatabase';
import { collection, doc, setDoc, deleteDoc } from '@firebase/firestore';
import { format } from 'date-fns';
import MovementsForm from '../MovementsForm';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import classes from './styles.module.scss';
import SlideLeftTransition from '../SlideLeftTransition';

const ExpenseDetailsModal = () => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const dispatch = useAppDispatch();
    const database = useDatabase();
    const isOpen = useAppSelector(state => state.movements.isExpenseDetailsModalOpen);
    const movement = useAppSelector(state => state.movements.selectedMovement);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            type: movement?.type || 'expense',
            description: movement?.description || '',
            amount: movement?.amount || 0,
            category: movement?.category || '',
            dateTime: new Date(movement?.dateTime || new Date(Date.now())),
        },
        onSubmit: async (values) => {
            try {                
                const collectionRef = collection(database, 'movements');
                await setDoc(doc(collectionRef, movement?.id), {
                    ...values,
                    dateTime: format(values.dateTime, 'yyyy/MM/dd hh:mm:ss'),
                });
                console.log(`Document ${movement?.id} was updated`);
            } catch (e) {
                console.error('Error updating document: ', e);
            }
        },
    });

    const submitForm = () => {
        formik.submitForm();
        dispatch(closeExpenseDetailsModal());
    };

    const deleteDocument = async () => {
        try {
            const collectionRef = collection(database, 'movements');
            await deleteDoc(doc(collectionRef, movement?.id));
            dispatch(closeExpenseDetailsModal());
            console.log(`Document ${movement?.id} was deleted`);
        } catch (e) {
            console.error('Error deleting document: ', e);
        }
    };

    return (
        <Dialog
            open={isOpen}
            onClose={() => dispatch(closeExpenseDetailsModal())}
            fullScreen={fullScreen}
            TransitionComponent={SlideLeftTransition}
            keepMounted
        >
            <DialogTitle>Detalle del Movimiento</DialogTitle>
            <DialogContent className={classes.dialogContent}>
                <MovementsForm formik={formik} />
            </DialogContent>
            <DialogActions>
                <Button onClick={deleteDocument} variant="text" color="error">
                    Borrar
                </Button>
                <div className={classes.actionButtons}>
                    <Button onClick={() => dispatch(closeExpenseDetailsModal())} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={submitForm} color="primary">
                        Guardar
                    </Button>
                </div>
            </DialogActions>
        </Dialog>
    );
};

export default ExpenseDetailsModal;
