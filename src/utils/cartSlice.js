import { createSlice, current } from "@reduxjs/toolkit"

const initialState = {
    items:[],
}

const cartSlice = createSlice({
    name: "Cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            //To debug the state and log the state we can do
            // console.log(current(state)); //This is we can log the value of state
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        //originalState= {items: ["pizza"]}
        clearCart: (state) => {
            // console.log(current(state));
            //Redux toolkit says, either mutate the existing state or return a new state
            // It will empty the cart, it doesn't matter how many items were there in cart.
            state.items.length = 0; // originalState=[]
            //or you can do this
            // return { items: [] }; //this new object will be replaced inside originalState = {items: []}
        },
    },
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;