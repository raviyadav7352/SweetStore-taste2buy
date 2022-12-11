import React, { useContext, useState } from 'react'
import classes from './Cart.module.css'
import Modal from './Modal'
import CartContext from '../store/cart-context'
import CartItem from './CartItem'
import OrderForm from './OrderForm'
const Cart = props =>{
    const [orderFormShow, setOrderFormShow] =useState(false)
    const cartctx = useContext(CartContext)
    const totalAmount =cartctx.totalAmount.toFixed(2)
    const HasItemInCart = cartctx.items.length > 0
    const addItemCartHandler = (item)=>{
        cartctx.addItem(item);
    }
    const orderButtonHandler = (view)=>{
        setOrderFormShow(true)
        document.getElementById("view").scrollIntoView()
    }
    const lessItemCartHandler = (id)=>{
        cartctx.removeItem(id)
    }
    console.log(cartctx.items)
    const submitorderData=(userOrderData)=>{
        fetch("https://food-order-7352-default-rtdb.asia-southeast1.firebasedatabase.app/orderdata.json",{
            method:"POST",
            body:JSON.stringify({userOrderData, orderItemData:cartctx.items}),


        })
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
        <Modal backdrop="true" onHideCart={props.onHideCart}>
            <div className={classes.orderDetails}>
            {cartItems}
            <div className={classes.total}>
            <span>Total amount</span>
            <span>₹{totalAmount}</span>
            
            </div>
            {orderFormShow && <OrderForm scrollView={orderButtonHandler} onOrderCheckout={submitorderData} onCancel={props.onHideCart}></OrderForm>}
            </div>
            {!orderFormShow  && <div className={classes.actions}> 
                <button onClick={props.onHideCart} className={classes["buttton--alt"]}>close</button>
                {HasItemInCart &&  <button className={classes.button} onClick={orderButtonHandler}>order</button>}
            </div>}
        </Modal>
    )
}
export default Cart;