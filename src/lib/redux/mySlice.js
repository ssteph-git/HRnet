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

export const  {addEmployee} = dataEmployeesSlice.actions;

const store = configureStore({
  reducer: {
    addEmployee: dataEmployeesSlice.reducer
  }
});

export {dataEmployeesSlice, store};
  
