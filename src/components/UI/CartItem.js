import classes from './CartItem.module.css';
import OrderForm from './OrderForm';
const CartItem = (props) => {
    return (
        <li className={classes["cart-item"]}>
            <div>
                <h2>{props.name}</h2>
                <div className={classes.summary}>
                    <span className={classes.price}>₹{props.price}</span>
                </div>
            </div>
            <div className={classes.actionss}>
                <div className={classes.actions}>
                    <button onClick={props.onLess}>-</button>
                    <button className={classes.amount}>{props.amount}</button>
                    <button onClick={props.onAdd}>+</button>
                </div>
                <div className={classes.prices}>₹{props.price * props.amount}</div>
            </div>
        </li>
    )
}
export default CartItem;