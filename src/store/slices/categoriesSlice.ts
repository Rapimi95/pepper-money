import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore, orderBy, query, setDoc } from '@firebase/firestore';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { firebaseApp } from '../../firebase';
import Category from '../../models/Category';

interface CategoriesState {
  categories: Category[],
};

const initialState: CategoriesState = {
  categories: [],
};

const database = getFirestore(firebaseApp);

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    const collectionRef = collection(database, 'categories');
    const collectionQuery = query(collectionRef, orderBy('description'));
    const collectionSnapshot = await getDocs(collectionQuery);
    const collectionData = collectionSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    return collectionData as Category[];
  }
);

export const addCategory = createAsyncThunk(
  'categories/addCategory',
  async (category: Category) => {
    await addDoc(collection(database, 'categories'), {
      ...category
    });
  }
);

export const updateCategory = createAsyncThunk(
  'categories/updateCategory',
  async ({ id, category }: {id: string, category: Category}) => {
    const collectionRef = collection(database, 'categories');
    await setDoc(doc(collectionRef, id), category);
  }
);

export const deleteCategory = createAsyncThunk(
  'categories/deleteCategory',
  async (id: string) => {
    const collectionRef = collection(database, 'categories');
    await deleteDoc(doc(collectionRef, id));
  }
);

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export default categoriesSlice.reducer;
