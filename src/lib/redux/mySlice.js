import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from '@reduxjs/toolkit';

const dataEmployeesSlice = createSlice({
  name: "saveEmployees",
initialState:  [],
  reducers: {
    
    addEmployee: (state, action) => {
        if (state.length==null){
            state = [action.payload];
        }else{
            state.push(action.payload);
        }
    
    },
  },
});

const isModalActiveSlice = createSlice({
    name: 'isModalActive',
    initialState: {
        isActive: false,
      },
    reducers: {
      isActiveTurn: (state) => {state.isActive = !state.isActive;},
      isActiveTrue: (state) => {state.isActive = true;},
      isActiveFalse: (state) => {state.isActive = false;}
    }
  });


export const  {addEmployee} = dataEmployeesSlice.actions;
export const  {isActiveTurn, isActiveTrue, isActiveFalse} = isModalActiveSlice.actions;

const store = configureStore({
  reducer: {
    addEmployee: dataEmployeesSlice.reducer,
    isModalActive: isModalActiveSlice.reducer
  }
});

export {dataEmployeesSlice, isModalActiveSlice, store};
  
