import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MovementsPage from './pages/MovementsPage';
import AddExpensesModal from './components/AddExpensesModal';
import TopNavBar from './components/TopNavBar';
import BottomNavBar from './components/BottomNavBar';
// import LoadingSpinner from './components/LoadingSpinner';

import { PATHS } from './config/constants';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="root">
        <TopNavBar />
        <Switch>
          <Route path={PATHS.summary}>
            <div>Resumen</div>
          </Route>
          <Route path={PATHS.budget}>
            <div>Presupuesto</div>
          </Route>
          <Route path={PATHS.movements}>
            <MovementsPage />
          </Route>
        </Switch>
        
        <BottomNavBar />
        <AddExpensesModal />
      </div>
    </BrowserRouter>
  );
}

export default App;
