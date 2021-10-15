import { Button, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { useHistory } from 'react-router';
import BlankLayout from '../../../components/BlankLayout';
import { useAppDispatch, useAppSelector } from '../../../store';
import { addMovement } from '../../../store/slices/movementsSlice';
import MovementForm from '../../../components/MovementForm';
import Category from '../../../models/Category';
import * as yup from 'yup';
import classes from './styles.module.scss';

const movementSchema = yup.object({
    description: yup.string().required('Requerido.'),
    amount: yup.number().required('Requerido.'),
    categoryId: yup.string().required('Requerido.'),
    dateTime: yup.date().required('Requerido.'),
});

const AddMovementPage = () => {
    const dispatch = useAppDispatch();
    const history = useHistory();
    const categories = useAppSelector(state => state.categories.categories);

    const formik = useFormik({
        initialValues: {
            description: '',
            amount: '' as number | '' ,
            categoryId: '',
            dateTime: new Date(Date.now()),
        },
        validationSchema: movementSchema,
        onSubmit: async (values) => {
            const category = categories.find((category: Category) => category.id === values.categoryId)
                || new Category('', 'expense', 0);

            const data = {
                description: values.description,
                amount: values.amount as number,
                category: category,
                dateTime: values.dateTime,
            };

            dispatch(addMovement(data));
            history.goBack();
        },
    });

    const top = <Typography variant="h6">Añadir Movimiento</Typography>;

    const main = <MovementForm formik={formik} />;

    const bottom = <div className={classes.bottom}>
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

export default AddMovementPage;