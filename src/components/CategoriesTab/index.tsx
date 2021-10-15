import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import classes from './styles.module.scss';

const CategoriesTab = () => {
    const [value, setValue] = useState<'expense' | 'income'>('expense');

    return (
        <TabContext value={value}>
            <div className={classes.tabListContainer}>
                <TabList
                    centered
                    onChange={(event, value) => setValue(value)}
                >
                    <Tab label="Gastos" value="expense" />
                    <Tab label="Ingresos" value="income" />
                </TabList>
            </div>
            <TabPanel value="expense">Item One</TabPanel>
            <TabPanel value="income">Item Two</TabPanel>
        </TabContext>
    );
};

export default CategoriesTab;