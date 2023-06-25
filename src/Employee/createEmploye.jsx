import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const initialState = {
    employe: [{
        firstname: "Tommy",
        lastname:"Egan",
        date: '2010-06-05',
        departement:'Sales',
        birth: '1996-12-25',
        street:'Hollywood',
        city: 'Manhatthan',
        state:'New York',
        code:'20459'
    },{
            firstname: "James",
            lastname:"St Patrick",
            date: '2010-06-05',
            departement:'Sales',
            birth: '1996-12-25',
            street:'Hollywood',
            city: 'Manhatthan',
            state:'New York',
            code:'20459'
    }
    ]
}

const employeSlice = createSlice({
    name:'employe',
    initialState,
    reducers:{
        addEmploye:(state,action) => {
            state.employe.push({...action.payload})
        }
    }
})

export const {addEmploye} = employeSlice.actions
export default employeSlice.reducer