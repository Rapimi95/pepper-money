import { useEffect } from 'react';
import { fetchMovements } from '../store/slices/movementsSlice';
import { useAppDispatch } from '../store';

const useMovements = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchMovements());
    }, [dispatch]);
};

export default useMovements;
