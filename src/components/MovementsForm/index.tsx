import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import { Autocomplete, FormControl, InputLabel, MenuItem, Select, TextField, ToggleButton, ToggleButtonGroup } from '@mui/material';
import useCollection from '../../hooks/useCollection';
import Category from '../../models/Category';
import classes from './styles.module.scss';

type MovementsFormProps = {
    formik: any,
};

const MovementsForm = ({ formik }: MovementsFormProps) => {
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
                <InputLabel id="category">Etiqueta</InputLabel>
                <Select
                    id="category"
                    name="category"
                    labelId="category"
                    label="Etiqueta"
                    value={formik.values.category}
                    onChange={formik.handleChange}
                >
                    {categories?.map((category: Category) => (
                        <MenuItem key={category.id} value={category.description}>{category.description}</MenuItem>)
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
    );
};

export default MovementsForm;