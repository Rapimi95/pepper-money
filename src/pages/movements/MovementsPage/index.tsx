import ListOfMovements from '../../../components/ListOfMovements';
import AddMovementFAB from '../../../components/AddMovementFAB';
import MainLayout from '../../../components/MainLayout';
import useMovements from '../../../hooks/useMovements';
import useCategories from '../../../hooks/useCategories';
import BottomNavBar from '../../../components/BottomNavBar';

const MovementsPage = () => {
    useMovements();
    useCategories();

    return (
        <MainLayout>
            <ListOfMovements />
            <AddMovementFAB />
            <BottomNavBar />
        </MainLayout>
    );
};

export default MovementsPage;