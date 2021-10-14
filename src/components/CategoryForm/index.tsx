import { TextField } from '@mui/material';
import classes from './styles.module.scss';

type CategoryFormProps = {
    formik: any;
}

const CategoryForm = ({ formik }: CategoryFormProps) => {    
    return (
        <form className={classes.root} onSubmit={formik.handleSubmit}>
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
        </form>
    );
};

export default CategoryForm;