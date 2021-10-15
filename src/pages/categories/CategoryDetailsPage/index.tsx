import { Button, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { useHistory, useParams } from 'react-router';
import BlankLayout from '../../../components/BlankLayout';
import CategoryForm from '../../../components/CategoryForm';
import { useAppDispatch, useAppSelector } from '../../../store';
import { deleteCategory, updateCategory } from '../../../store/slices/categoriesSlice';
import * as yup from 'yup';
import classes from './styles.module.scss';

const categorySchema = yup.object({
    description: yup.string().required('Requerido.'),
    type: yup.string().required('Requerido.'),
    budget: yup.number().required('Requerido.'),
}); 

const CategoryDetailsPage = () => {
    const dispatch = useAppDispatch();
    const categories = useAppSelector(state => state.categories.categories);
    const history = useHistory();
    const {id: categoryId} = useParams<{id: string}>();

    const category = categories.find(category => category.id === categoryId);

    const formik = useFormik({
        initialValues: {
            description: category?.description,
            type: category?.type,
            budget: category?.budget,
        },
        validationSchema: categorySchema,
        onSubmit: async (values) => {
            const data = {
                id: categoryId,
                category: {
                    description: values!.description as string,
                    type: values!.type as 'expense' | 'income',
                    budget: values!.budget as number,
                },
            };

            dispatch(updateCategory(data));
            history.goBack();
        },
    });

    const deleteSelectedCategory = () => {
        dispatch(deleteCategory(categoryId));
        history.goBack();
    };

    const top = <Typography variant="h6">Detalles de la categoría</Typography>;

    const main = <CategoryForm formik={formik} />;

    const bottom = <div className={classes.bottom}>
        <Button onClick={deleteSelectedCategory} color="error">Eliminar</Button>
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

export default CategoryDetailsPage;