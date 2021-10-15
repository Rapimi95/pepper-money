import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MovementsPage from './pages/movements/MovementsPage';
import AddMovementPage from './pages/movements/AddMovementPage';
import MovementDetailsPage from './pages/movements/MovementDetailsPage';
import CategoriesPage from './pages/categories/CategoriesPage';
import AddCategoryPage from './pages/categories/AddCategoryPage';
import CategoryDetailsPage from './pages/categories/CategoryDetailsPage';
import { PATHS } from './config/constants';
import useMovements from './hooks/useMovements';
import useCategories from './hooks/useCategories';

const App = () => {
  useMovements();
  useCategories();

  return (
    <BrowserRouter>
      <Switch>
        <Route path={PATHS.addMovement} component={AddMovementPage} />
        <Route path={PATHS.movementDetails()} component={MovementDetailsPage} />
        <Route path={PATHS.movements} component={MovementsPage} />
        <Route path={PATHS.addCategory} component={AddCategoryPage} />
        <Route path={PATHS.categoryDetails()} component={CategoryDetailsPage} />
        <Route path={PATHS.categories} component={CategoriesPage} />
        <Route path={PATHS.summary}>Resumen</Route>
        <Route path="/" render={() => <Redirect to={PATHS.movements} />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
