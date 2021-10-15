import ListOfMovements from '../../../components/ListOfMovements';
import AddMovementFAB from '../../../components/AddMovementFAB';
import MainLayout from '../../../components/MainLayout';

const MovementsPage = () => {
    return (
        <MainLayout>
            <ListOfMovements />
            <AddMovementFAB />
        </MainLayout>
    );
};

export default MovementsPage;