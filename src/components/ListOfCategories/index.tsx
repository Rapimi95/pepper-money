import { Tab, Tabs } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { PATHS } from '../../config/constants';
import Category from '../../models/Category';
import { useAppSelector } from '../../store';
import classes from './styles.module.scss';

const ListOfCategories = () => {
    const history = useHistory();
    const categories = useAppSelector(state => state.categories.categories);

    const [type, setType] = useState(0);
    const [filteredCategories, setFilteredCategories] = useState<Category[]>(categories);

    const getType = (type: number) => type === 0 ? 'expense' : 'income';

    useEffect(() => {
        const newCategories = categories.filter((category: Category) => category.type === getType(type));
        setFilteredCategories(newCategories);
    }, [type, categories, setFilteredCategories]);

    return (
        <>
            <Tabs
                value={type}
                onChange={(event, value) => setType(value)}
                centered>
                <Tab label="Gastos" />
                <Tab label="Ingresos" />
            </Tabs>

            {/* <div className={classes.toggleButtonContainer}>
                <ToggleButtonGroup
                    fullWidth
                    exclusive
                    id="type"
                    color="primary"
                    className={classes.toggleButtonGroup}
                    value={type}
                    onChange={(event, value) => setType(value)}
                >
                    <ToggleButton color="error" value="expense">Gastos</ToggleButton>
                    <ToggleButton color="success" value="income">Ingresos</ToggleButton>
                </ToggleButtonGroup>
            </div> */}

            <List className={classes.listOfMovements} disablePadding>
                {filteredCategories?.map((category: Category) => {
                    const budget = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(category.budget);

                    return (
                        <ListItem key={category.id} className={classes.listItem} disablePadding>
                            <ListItemButton
                                onClick={() => history.push(PATHS.categoryDetails(category.id))}
                                className={classes.listButton}
                            >
                                <ListItemText primary={category.description} />
                                <ListItemText primary={budget} className={classes.secondaryListItemText} />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        </>
    );
};

export default ListOfCategories;
