import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { closeAddExpensesModal } from '../../store/slices/movementsSlice';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { FormControl, InputLabel, MenuItem, Select, TextField, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useFormik } from 'formik';
import useDatabase from '../../hooks/useDatabase';
import useCollection from '../../hooks/useCollection';
import { addDoc, collection } from '@firebase/firestore';
import Tag from '../../models/Tag';
import { format } from 'date-fns';

const AddExpensesModal = () => {
    const database = useDatabase();
    const { data: tags } = useCollection('tags');
    const isOpen = useAppSelector((state) => state.movements.isAddExpensesModalOpen);
    const dispatch = useAppDispatch();
    
    const formik = useFormik({
        initialValues: {
            type: 'expense',
            description: '',
            amount: 0,
            tag: '',
            dateTime: new Date(Date.now()),
        },
        onSubmit: async (values) => {
            try {
                const docRef = await addDoc(collection(database, 'movements'), {
                    ...values,
                    dateTime: format(values.dateTime, 'yyyy/MM/dd mm:ss'),
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
        <Dialog open={isOpen} onClose={() => dispatch(closeAddExpensesModal())}>
            <DialogTitle>Añadir Movimiento</DialogTitle>
            <DialogContent>
                <form onSubmit={formik.handleSubmit}>
                    <ToggleButtonGroup
                        fullWidth
                        exclusive
                        id="type"
                        color="primary"
                        value={formik.values.type}
                        onChange={(e, type) => { formik.setFieldValue('type', type) }}
                    >
                        <ToggleButton value="expense">Gasto</ToggleButton>
                        <ToggleButton value="income">Ingreso</ToggleButton>
                    </ToggleButtonGroup>
                    <TextField
                        fullWidth
                        id="description"
                        margin="dense"
                        label="Descripción"
                        type="text"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                    />
                    <TextField
                        fullWidth
                        id="amount"
                        margin="dense"
                        label="Monto"
                        type="number"
                        value={formik.values.amount}
                        onChange={formik.handleChange}
                    />
                    <FormControl fullWidth margin="dense">
                        <InputLabel id="tag">Etiqueta</InputLabel>
                        <Select
                            id="tag"
                            name="tag"
                            labelId="tag"
                            label="Etiqueta"
                            value={formik.values.tag}
                            onChange={formik.handleChange}
                        >
                            {tags?.map((tag: Tag) => (
                                <MenuItem key={tag.id} value={tag.description}>{tag.description}</MenuItem>)
                            )}
                        </Select>
                    </FormControl>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateTimePicker
                            renderInput={props => <TextField fullWidth id="dateTime" margin="dense" {...props} />}
                            label="Fecha"
                            value={formik.values.dateTime}
                            onChange={(dateTime) => { formik.setFieldValue('dateTime', dateTime) }}
                        />
                    </LocalizationProvider>
                </form>
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
