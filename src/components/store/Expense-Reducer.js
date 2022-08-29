 import { createSlice } from "@reduxjs/toolkit";


 const intialexpense = { 
    expense : {} ,
    totalexpense:0
 }


 const expSlice = createSlice ( {
    name:'expense',
    intialexpense:intialexpense,
    reducer:{
        setexpense(state , action) {
            state.expense = action.payload
        }

    }
 })

export const expActions = expSlice.actions;
export default expSlice.reducer;