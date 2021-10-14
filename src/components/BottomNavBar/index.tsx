import { useState } from "react";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PieChartIcon from '@mui/icons-material/PieChart';
import classes from './styles.module.scss';
import { Link } from "react-router-dom";
import { PATHS } from "../../config/constants";

const BottomNavBar = () => {
    const [value, setValue] = useState(1);

    return (
        <BottomNavigation
            className={classes.root}
            value={value}
            onChange={(event, newValue) => setValue(newValue)}
            showLabels  
        >
            <BottomNavigationAction component={Link} to={PATHS.movements} label="Resumen" icon={<PieChartIcon />} />
            <BottomNavigationAction component={Link} to={PATHS.movements} label="Movimientos" icon={<RestoreIcon />} />
            <BottomNavigationAction component={Link} to={PATHS.movements} label="Presupuesto" icon={<AssignmentIcon />} />
        </BottomNavigation>
    );
};

export default BottomNavBar;
