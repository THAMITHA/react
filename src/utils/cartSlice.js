import { createSlice, current } from "@reduxjs/toolkit";

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
            //redux uses immer behind the seen 
            state.items.push(action.payload);
        },
        removeItem: (state) =>{
            state.items.pop();
        },
        clearCart: (state) =>{
            // state = ["Thamitha"] ===> this will not Worker.
            // console.log(state) //this return proxystate hence to clearly wrap with current
            // console.log(current(state))
            // state = []
            // console.log(state)
            return {items: []};  //this new [] will be replaced inside originalstate = []
            // state.items.length = 0;
        }
    }
})

export const { addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
