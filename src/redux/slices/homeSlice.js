import { createSlice } from '@reduxjs/toolkit';

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    categories: [],
    allPets: [],
    selectedCategory: '',
    filteredPetsByCategory: [],
    selectedPet: {},
  },
  reducers: {
    setAllcategories: (state, action) => {
      state.categories = action.payload;
      // console.log('Pasó por setAllCategories');
    },
    setAllPets: (state, action) => {
      state.allPets = action.payload;
      // console.log('Pasó por setAllPets');
    },
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
      state.filteredPetsByCategory = state.allPets.filter(
        (pet) => pet.category === state.selectedCategory
      );
    },
    setSelectedPet: (state, action) => {
      state.selectedPet = action.payload;
    },
  },
});

export const { setCategory, setAllcategories, setAllPets, setSelectedPet } =
  homeSlice.actions;
export default homeSlice.reducer;
