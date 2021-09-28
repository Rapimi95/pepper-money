import { getFirestore } from 'firebase/firestore';
import { firebaseApp } from '../firebase';

const useDatabase = () => {
    return getFirestore(firebaseApp);
};

export default useDatabase;
