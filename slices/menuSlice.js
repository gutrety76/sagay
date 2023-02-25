import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    typeMenuu: 0,
    typeMenuu1: 0,
    typeMenuu2: 0,
    phoneChecker: false,
    promoChecker: "",
    typeOfSelectedProductsToAdd: [],
    content: []

}
const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        setContent(state,action){
            state.content = action.payload
        },
        setMenuFilter(state,action){
            state.typeMenuu = action.payload
        },
        toggleValueInArray(state,action){
            const index = state.typeOfSelectedProductsToAdd.indexOf(action.payload);
            if (index === -1) {
                state.typeOfSelectedProductsToAdd.push(action.payload)
            } else {
                state.typeOfSelectedProductsToAdd.splice(index, 1)
            }

        },
        setMenuFilter1(state,action){
            state.typeMenuu1 = action.payload
        },
        setMenuFilter2(state,action){
            state.typeMenuu2 = action.payload
        },
        setPhoneCheck(state,action){
            state.phoneChecker = action.payload
        },
        setPromoCheck(state, action){
            state.promoChecker = action.payload
        }
    }
})
export const {setMenuFilter, setPhoneCheck,setContent,toggleValueInArray, setPromoCheck} = menuSlice.actions

export default menuSlice.reducer