import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore, orderBy, query, setDoc } from '@firebase/firestore';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { format } from 'date-fns';
import { firebaseApp } from '../../firebase';
import Movement from '../../models/Movement';

interface MovementsState {
  movements: Movement[],
};

const initialState: MovementsState = {
  movements: [],
};

const database = getFirestore(firebaseApp);

export const fetchMovements = createAsyncThunk(
  'movements/fetchMovements',
  async () => {
    const collectionRef = collection(database, 'movements');
    const collectionQuery = query(collectionRef, orderBy('dateTime', 'desc'));
    const collectionSnapshot = await getDocs(collectionQuery);
    const collectionData = collectionSnapshot.docs.map(doc => ({ 
      id: doc.id,
      ...doc.data(),
    }));
    return collectionData as Movement[];
  }
);

export const addMovement = createAsyncThunk(
  'movements/addMovement',
  async (movement: Movement) => {
    await addDoc(collection(database, 'movements'), {
      ...movement,
      dateTime: format(movement.dateTime, 'yyyy/MM/dd hh:mm:ss'),
    });
  }
);

export const updateMovement = createAsyncThunk(
  'movements/updateMovement',
  async ({id, movement}: {id: string, movement: Movement}) => {
    const collectionRef = collection(database, 'movements');
    await setDoc(doc(collectionRef, id), {
        ...movement,
        dateTime: format(movement.dateTime, 'yyyy/MM/dd hh:mm:ss'),
    });
  }
);

export const deleteMovement = createAsyncThunk(
  'movements/deleteMovement',
  async (id: string) => {
    const collectionRef = collection(database, 'movements');
    await deleteDoc(doc(collectionRef, id));
  }
);

export const movementsSlice = createSlice({
  name: 'movements',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchMovements.fulfilled, (state, action) => {
      state.movements = action.payload;
    });
  },
});

export default movementsSlice.reducer;