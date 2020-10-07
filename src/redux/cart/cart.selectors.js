import { createSelector } from 'reselect';

// Two types of selector Input Selector(Don't use create selector), Output Selector(Does use create and input selector)

// InputSelector
const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) =>  cartItems.reduce(
        (acccumalatedQuantity, cartItem) => (acccumalatedQuantity + cartItem.quantity), 0
    ) 
)