import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {server, slugs} from "../../helpers/constants";
import {createUrlFromDummyServer} from "../../helpers/utils";


export const fetchEmployees=createAsyncThunk('employees/fetchEmployees', async ()=>{
    const url = createUrlFromDummyServer(server)(slugs.employees);
    const response = await fetch(url,{mode: 'cors'})
    let employees =  await response.json()
    return employees.data;
});


export const employeeListSlice = createSlice({
    name:'employeeList',
    initialState:{
        employees:[],
        status:'idle',
        error:null,
        filter:''
    },
    reducers:{
        search:(state, action)=>{
            state.filter = action.payload
        }
    },
    extraReducers: {
        [fetchEmployees.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchEmployees.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.employees = state.employees.concat(action.payload)
        },
        [fetchEmployees.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        }
    }
})


export const {search} = employeeListSlice.actions
export default employeeListSlice.reducer