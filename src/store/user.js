import { createSlice } from "@reduxjs/toolkit";


const initState = {id:null,flagEdu:false,flagExp:false,flagQ:false,flagQC:false}

const userReducer = createSlice({
    name:'user',
    initialState:initState,
    reducers:{
        setId(state,{payload}){
            state.id = payload
        },
        setFlagEdu(state){
            state.flagEdu=true
        },
        setFlagExp(state){
            state.flagExp=true
        },
        setFlagQ(state){
            state.flagQ=true
        },
        setFlagQC(state){
            state.flagQC=true
        }
    }
})
export const userActions = userReducer.actions
export default userReducer.reducer