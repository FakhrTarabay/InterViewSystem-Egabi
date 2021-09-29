import { createSlice } from "@reduxjs/toolkit";


const initState = {id:null}

const userReducer = createSlice({
    name:'user',
    initialState:initState,
    reducers:{
        setId(state,{payload}){
            state.id = payload
        }
    }
})
export const userActions = userReducer.actions
export default userReducer.reducer