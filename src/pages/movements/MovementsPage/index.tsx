import ListOfMovements from '../../../components/ListOfMovements';
import AddMovementFAB from '../../../components/AddMovementFAB';
import MainLayout from '../../../components/MainLayout';
import useMovements from '../../../hooks/useMovements';
import BottomNavBar from '../../../components/BottomNavBar';

const MovementsPage = () => {
    useMovements();

    return (
        <MainLayout>
            <ListOfMovements />
            <AddMovementFAB />
            <BottomNavBar />
        </MainLayout>
    );
};

export default MovementsPage;