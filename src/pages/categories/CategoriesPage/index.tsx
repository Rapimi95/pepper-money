import ListOfCategories from '../../../components/ListOfCategories';
import AddCategoryFAB from '../../../components/AddCategoryFAB';
import MainLayout from '../../../components/MainLayout';
import useCategories from '../../../hooks/useCategories';

const CategoriesPage = () => {
    useCategories();

    return (
        <MainLayout>
            <ListOfCategories />
            <AddCategoryFAB />
        </MainLayout>
    );
};

export default CategoriesPage;