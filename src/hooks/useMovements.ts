import { useEffect, useState } from 'react';
import { collection, DocumentData, query, orderBy, limit, getDocs } from 'firebase/firestore';
import useDatabase from './useDatabase';

const useMovements = () => {
    const [data, setData] = useState<DocumentData | undefined>(undefined);
    const [error, setError] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const database = useDatabase();

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const collectionRef = collection(database, 'movements');
                const collectionQuery = query(collectionRef, orderBy('dateTime', 'desc'), limit(10));
                const collectionSnapshot = await getDocs(collectionQuery);
                const collectionData = collectionSnapshot.docs.map(doc => ({ 
                    id: doc.id,
                    ...doc.data(),
                }));
                setData(collectionData);
            } catch(e) {
                setError(e);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, [database]);

    return { data, error, loading };
};

export default useMovements;
