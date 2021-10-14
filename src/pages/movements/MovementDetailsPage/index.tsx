import { Button, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { useHistory, useParams } from 'react-router';
import BlankLayout from '../../../components/BlankLayout';
import MovementForm from '../../../components/MovementForm';
import { useAppDispatch, useAppSelector } from '../../../store';
import { deleteMovement, updateMovement } from '../../../store/slices/movementsSlice';
import * as yup from 'yup';
import classes from './styles.module.scss';

const movementSchema = yup.object({
    description: yup.string().required('Requerido.'),
    amount: yup.number().required('Requerido.'),
    categoryId: yup.string().required('Requerido.'),
    type: yup.string().required('Requerido.'),
    dateTime: yup.date().required('Requerido.'),
});

const MovementDetailsPage = () => {
    const dispatch = useAppDispatch();
    const movements = useAppSelector(state => state.movements.movements);
    const history = useHistory();
    const {id: movementId} = useParams<{id: string}>();

    const movement = movements.find(movement => movement.id === movementId);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            description: movement?.description || '',
            amount: movement?.amount || 0,
            categoryId: movement?.categoryId || '',
            type: movement?.type || 'expense' as 'expense' | 'income',
            dateTime: new Date(movement?.dateTime || new Date(Date.now())),
        },
        validationSchema: movementSchema,
        onSubmit: async (values) => {
            const data = {
                id: movementId,
                movement: {
                    description: values!.description,
                    amount: values!.amount,
                    categoryId: values!.categoryId,
                    type: values!.type,
                    dateTime: values!.dateTime,
                },
            };

            dispatch(updateMovement(data));
            history.goBack();
        },
    });

    const deleteSelectedMovement = () => {
        dispatch(deleteMovement(movement!.id as string));
        history.goBack();
    };

    const top = <Typography variant="h6">Detalles del movimiento</Typography>;

    const main = <MovementForm formik={formik} />;

    const bottom = <div className={classes.bottom}>
        <Button onClick={deleteSelectedMovement} color="error">Eliminar</Button>
        <Button onClick={() => history.goBack()} color="primary">Cancelar</Button>
        <Button onClick={() => formik.submitForm()} color="primary">Guardar</Button>
    </div>;

    return (
        <BlankLayout
            top={top}
            main={main}
            bottom={bottom}
        />
    );
};

export default MovementDetailsPage;