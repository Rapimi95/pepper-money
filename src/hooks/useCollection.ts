import { useEffect, useState } from 'react';
import { collection, DocumentData, getDocs } from 'firebase/firestore';
import useDatabase from './useDatabase';

const useCollection = (collectionName: string) => {
    const [data, setData] = useState<DocumentData | undefined>(undefined);
    const [error, setError] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const database = useDatabase();

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const collectionRef = collection(database, collectionName);
                const collectionSnapshot = await getDocs(collectionRef);
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
    }, [database, collectionName]);

    return { data, error, loading };
};

export default useCollection;
