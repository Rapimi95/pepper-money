import ListOfMovements from '../../components/ListOfMovements';
import MovementsFloatingActionButton from '../../components/MovementsFloatingActionButton';
import ExpenseDetailsModal from '../../components/ExpenseDetailsModal';

const MovementsPage = () => {
    return (
        <>
            <ListOfMovements />
            <MovementsFloatingActionButton />
            <ExpenseDetailsModal />
        </>
    );
};

export default MovementsPage;