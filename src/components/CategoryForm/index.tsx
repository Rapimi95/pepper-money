import { TextField, ToggleButton, ToggleButtonGroup } from '@mui/material';
import classes from './styles.module.scss';

type CategoryFormProps = {
    formik: any;
}

const CategoryForm = ({ formik }: CategoryFormProps) => {    
    return (
        <form className={classes.root} onSubmit={formik.handleSubmit}>
            <ToggleButtonGroup
                fullWidth
                exclusive
                id="type"
                color="primary"
                className={classes.toggleButtonGroup}
                value={formik.values.type}
                onChange={(e, type) => { formik.setFieldValue('type', type) }}
            >
                <ToggleButton color="error" value="expense">Gasto</ToggleButton>
                <ToggleButton color="success" value="income">Ingreso</ToggleButton>
            </ToggleButtonGroup>

            <TextField
                fullWidth
                id="description"
                margin="dense"
                label="Descripción"
                type="text"
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.description && !!formik.errors.description}
                helperText={formik.touched.description && formik.errors.description}
            />

            <TextField
                fullWidth
                id="budget"
                margin="dense"
                label="Presupuesto"
                type="number"
                value={formik.values.budget}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.budget && !!formik.errors.budget}
                helperText={formik.touched.budget && formik.errors.budget}
            />
        </form>
    );
};

export default CategoryForm;