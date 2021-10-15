import ListOfCategories from '../../../components/ListOfCategories';
import AddCategoryFAB from '../../../components/AddCategoryFAB';
import MainLayout from '../../../components/MainLayout';
import { useAppDispatch } from '../../../store';
import { useEffect } from 'react';
import { setBottomNavbarValue } from '../../../store/slices/uiSlice';

const CategoriesPage = () => {
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(setBottomNavbarValue(2));
    }, [dispatch]);

    return (
        <MainLayout>
            <ListOfCategories />
            <AddCategoryFAB />
        </MainLayout>
    );
};

export default CategoriesPage;