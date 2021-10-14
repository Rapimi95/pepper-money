import { Button, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { useHistory } from 'react-router';
import BlankLayout from '../../../components/BlankLayout';
import CategoryForm from '../../../components/CategoryForm';
import { useAppDispatch } from '../../../store';
import { addCategory } from '../../../store/slices/categoriesSlice';
import * as yup from 'yup';
import classes from './styles.module.scss';

const categorySchema = yup.object({
   description: yup.string().required('Requerido.'), 
});

const AddCategoryPage = () => {
    const dispatch = useAppDispatch();
    const history = useHistory();

    const formik = useFormik({
        initialValues: {
            description: '',
        },
        validationSchema: categorySchema,
        onSubmit: async (values) => {
            dispatch(addCategory(values));
            history.goBack();
        },
    });

    const top = <Typography variant="h6">Añadir Categoría</Typography>;

    const main = <CategoryForm formik={formik} />;

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

export default AddCategoryPage;