import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            // Vanilla(older) Redux =>  DON'T MUTATE STATE, returing was mandatory.
            /*
            const newState = [...state];
            newState.items.push(action.payload);
            return newState;
            */

            // Redux toolkit => it uses Immer BTS.
            // We HAVE to mutate the state here.
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        // originalState = {items: ["pizza","Burger"]}
        clearItem: (state, action) => {
            /*
                state = [] -> this will not work becasue it will create new local variale and assign empty arr but not original state variable.

                RTK -> Either mutate the existing state or return a new State.
            */
            // state.items.length = 0; // originalState = []
            // or
            return {items: []}; // this new object will be replace inside originalState = {items: []}
        }

    },
});

export const { addItem, removeItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;