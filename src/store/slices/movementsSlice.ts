import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Movement from '../../models/Movement';

interface MovementsState {
  movements: Movement[],
  isAddExpensesModalOpen: boolean,
  isExpenseDetailsModalOpen: boolean,
  selectedMovement: Movement | null,
};

const initialState: MovementsState = {
  movements: [],
  isAddExpensesModalOpen: false,
  isExpenseDetailsModalOpen: false,
  selectedMovement: null,
};

export const movementsSlice = createSlice({
  name: 'movements',
  initialState,
  reducers: {
    openAddExpensesModal: state => { state.isAddExpensesModalOpen = true },
    closeAddExpensesModal: state => { state.isAddExpensesModalOpen = false },
    openExpenseDetailsModal: (state, action: PayloadAction<Movement>) => {
      state.selectedMovement = action.payload;
      state.isExpenseDetailsModalOpen = true;
    },
    closeExpenseDetailsModal: state => { state.isExpenseDetailsModalOpen = false },
    addMovement: (state, action: PayloadAction<Movement>) => {
      state.movements = [action.payload, ...state.movements];
    },
  },
});

export const {
  openAddExpensesModal,
  closeAddExpensesModal,
  openExpenseDetailsModal,
  closeExpenseDetailsModal,
} = movementsSlice.actions;

export default movementsSlice.reducer;
