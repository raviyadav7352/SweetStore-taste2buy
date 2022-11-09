import CartContext from "./cart-context";
import React, { useReducer } from "react";

const defaultCartState = {
    items:[],
    totalAmount:0
}
const actions ={Add:"Add", Remove:"Remove"};
const cartReducer = (state, action)=>{
    if(action.type == actions.Add){
        const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        const presentCartIndex = state.items.findIndex(item=>
           
            item.id === action.item.id
        );
        const presentItem =state.items[presentCartIndex];

        let updatedItems;
        if(presentItem){
            let updatedItem ={
                ...presentItem,
                amount:presentItem.amount + action.item.amount
            };
            updatedItems= [...state.items]
            updatedItems[presentCartIndex]=updatedItem
        }
        else {
            updatedItems= state.items.concat(action.item)
        }
        return{items:updatedItems,totalAmount:updateTotalAmount}
    }
    if(action.type == actions.Remove){
        const presentCartIndex = state.items.findIndex(item=>
           
            item.id === action.id
        );
        const presentItem =state.items[presentCartIndex]
        const updateTotalAmount = state.totalAmount - presentItem.price;
        let updatedItems;
        if(presentItem.amount  === 1){
            updatedItems = state.items.filter((item=>item.id !== action.id))
        }else{
            const updatedItem = {...presentItem, amount:presentItem.amount -1}
            updatedItems = [...state.items];
            updatedItems[presentCartIndex] =updatedItem;
        }
        return {
            items:updatedItems,
            totalAmount:updateTotalAmount
        }
    }
    return defaultCartState;
}

const CartProvider = (props) =>{
    const [cartState, dispatchCartAction]= useReducer(cartReducer, defaultCartState)
    const addItemCartHandler =item=>{
        dispatchCartAction({type:actions.Add, item:item})
    }
    const removeItemCartHandler = id =>{
        dispatchCartAction({type:actions.Remove, id:id})
    }

    const cartContext ={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addItemCartHandler,
        removeItem:removeItemCartHandler,
    }
    return <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    
}
export default CartProvider;