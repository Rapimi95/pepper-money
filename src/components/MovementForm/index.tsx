import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import { FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField, ToggleButton, ToggleButtonGroup } from '@mui/material';
import useCollection from '../../hooks/useCollection';
import Category from '../../models/Category';
import classes from './styles.module.scss';

type MovementsFormProps = {
    formik: any,
};

const MovementForm = ({ formik }: MovementsFormProps) => {
    const { data: categories } = useCollection('categories');

    return (
        <form onSubmit={formik.handleSubmit}>
            <ToggleButtonGroup
                fullWidth
                exclusive
                id="type"
                color="primary"
                className={classes.toggleButtonGroup}
                value={formik.values.type}
                onChange={(e, type) => { formik.setFieldValue('type', type) }}
            >
                <ToggleButton value="expense">Gasto</ToggleButton>
                <ToggleButton value="income">Ingreso</ToggleButton>
            </ToggleButtonGroup>
            <TextField
                fullWidth
                id="description"
                name="description"
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
                id="amount"
                margin="dense"
                label="Monto"
                type="number"
                value={formik.values.amount}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.amount && !!formik.errors.amount}
                helperText={formik.touched.amount && formik.errors.amount}
            />
            {/* <Autocomplete
                fullWidth
                disablePortal
                id="category"
                value={formik.values.category}
                onChange={formik.handleChange}
                className={classes.categoryInput}
                options={categories?.map((category: Category) => ({
                    label: category.description,
                    id: category.description,
                })) || []}
                renderInput={(params) => <TextField {...params} label="Categoría" />}
            /> */}
            <FormControl fullWidth margin="dense">
                <InputLabel
                    id="categoryId"
                    color={formik.touched.categoryId && formik.errors.categoryId ? 'error' : undefined}
                >
                    Categoría
                </InputLabel>
                <Select
                    id="categoryId"
                    name="categoryId"
                    labelId="categoryId"
                    label="Categoría"
                    value={formik.values.categoryId}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.categoryId && !!formik.errors.categoryId}
                >
                    {categories?.map((category: Category) => (
                        <MenuItem key={category.id} value={category.id}>{category.description}</MenuItem>)
                    )}
                </Select>
                {formik.touched.categoryId && (
                    <FormHelperText error={!!formik.errors.categoryId}>
                        {formik.errors.categoryId}
                    </FormHelperText>
                )}
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
    );
};

export default MovementForm;