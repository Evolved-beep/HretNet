import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import employeReducer from '../Employee/createEmploye'

const store = configureStore({
    reducer:{
        employe: employeReducer
    }
})

export default store