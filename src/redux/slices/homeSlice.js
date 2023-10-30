import { createSlice } from '@reduxjs/toolkit';
import { petsCategories } from '../../data/petsCategories-borrar';
import { pets } from '../../data/pets-borrar';

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    categories: petsCategories,
    allPets: pets,
    selectedCategory: '',
    filteredPetsByCategory: [],
    selectedPet: {},
  },
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
      state.filteredPetsByCategory = state.allPets.filter( (pet) => pet.category === state.selectedCategory);
    },
    setSelectedPet: (state, action) => {
      state.selectedPet = action.payload;
    }
  },
});

export const { setCategory, setSelectedPet } = homeSlice.actions;
export default homeSlice.reducer;
