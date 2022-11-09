import React, { useContext } from 'react'
import classes from './Cart.module.css'
import Modal from './Modal'
import CartContext from '../store/cart-context'
import CartItem from './CartItem'
const Cart = props =>{
    const cartctx = useContext(CartContext)
    const totalAmount =cartctx.totalAmount.toFixed(2)
    const HasItemInCart = cartctx.items.length > 0
    const addItemCartHandler = (item)=>{
        cartctx.addItem(item);
    }
    const lessItemCartHandler = (id)=>{
        cartctx.removeItem(id)
    }
    const cartItems =(<ul className={classes["cart-items"]}>
        {cartctx.items.map(item=>
        <CartItem 
        name={item.name}
        price ={item.price}
        amount= {item.amount}
        onLess={lessItemCartHandler.bind(null, item.id)}
        onAdd={addItemCartHandler.bind(null,item)}
        key={Math.random()}></CartItem>)}</ul>)
    return(
        <Modal onHideCart={props.onHideCart}>
            {cartItems}
            <div className={classes.total}>
            <span>Total amount</span>
            <span>₹{totalAmount}</span>
            </div>
            <div className={classes.actions}> 
                <button onClick={props.onHideCart} className={classes["buttton--alt"]}>close</button>
                {HasItemInCart && <button className={classes.button}>order</button>}
            </div>
        </Modal>
    )
}
export default Cart;