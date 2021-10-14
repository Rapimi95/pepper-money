import { useEffect } from 'react';
import { fetchCategories } from '../store/slices/categoriesSlice';
import { useAppDispatch } from '../store';

const useCategories = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);
};

export default useCategories;
