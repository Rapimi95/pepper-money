import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PieChartIcon from '@mui/icons-material/PieChart';
import classes from './styles.module.scss';
import { Link } from "react-router-dom";
import { PATHS } from "../../config/constants";
import { useAppDispatch, useAppSelector } from "../../store";
import { setBottomNavbarValue } from "../../store/slices/uiSlice";

const BottomNavbar = () => {
    const dispatch = useAppDispatch();
    const value = useAppSelector(state => state.ui.bottomNavbarValue);

    return (
        <BottomNavigation
            className={classes.root}
            value={value}
            onChange={(event, newValue) => dispatch(setBottomNavbarValue(newValue))}
            showLabels  
        >
            <BottomNavigationAction component={Link} to={PATHS.movements} label="Resumen" icon={<PieChartIcon />} />
            <BottomNavigationAction component={Link} to={PATHS.movements} label="Movimientos" icon={<RestoreIcon />} />
            <BottomNavigationAction component={Link} to={PATHS.categories} label="Presupuesto" icon={<AssignmentIcon />} />
        </BottomNavigation>
    );
};

export default BottomNavbar;
