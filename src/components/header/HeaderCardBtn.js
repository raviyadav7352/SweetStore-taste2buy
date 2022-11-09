import { useContext, useEffect, useState } from 'react';
import CartContext from '../store/cart-context';
import classes from './HeaderCartButton.module.css'
const HeaderCartBtn = props =>{
    const [buttonScale, setButtonScale] = useState(false)
    const cartctx= useContext(CartContext)
    const items = cartctx.items
    const cartItemNumber = items.reduce((curNumber, item)=>{
        return curNumber + item.amount;
    },0);
    const btnClasses = `${classes.button} ${buttonScale ? classes.bump :"" }`
    
    useEffect(()=>{
        if(items.length !== 0){
        setButtonScale(true);
        }
        setTimeout(() => {
            setButtonScale(false)
        }, 300);
    },[items])

    return (
        <button className={btnClasses} onClick={props.onShowCart}> 
            <span className={`material-symbols-rounded ${classes.icon}`}>
                shopping_cart
            </span>
            <span>cart</span>
            <span className={classes.badge}>{cartItemNumber}</span>
        </button>
    )
}
export default HeaderCartBtn;