
import classes from './Cart.module.css'
import Modal from './Modal'
const Cart = props =>{
    
    
    const cartItems =(<ul className={classes["cart-items"]}>{[{name:"Ravi", price:120, id:"a", amount:4, }].map(item=>
        <li key={Math.random()}>{item.name}</li>)}</ul>)
    return(
        <Modal onHideCart={props.onHideCart}>
            {cartItems}
            <div className={classes.total}>
            <span>Total amount</span>
            <span>$123.3</span>
            </div>
            <div className={classes.actions}> 
                <button onClick={props.onHideCart} className={classes["buttton--alt"]}>close</button>
                <button className={classes.button}>order</button>
            </div>
        </Modal>
    )
}
export default Cart;