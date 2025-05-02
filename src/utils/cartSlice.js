import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) =>{
            //vanialla(older) Redux => DON'T MUTATE STATE, "returning was mandatory"
            // const newState = [...state];
            // newState.items.push(action.payload);
            // return newState;

            //Redux-Toolkit
            //we have to mutate the state here
            state.items.push(action.payload);
        },
        removeItem: (state) =>{
            state.items.pop();
        },
        clearCart: (state) =>{
            state.items.length = 0;
        }
    }
})

export const { addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
