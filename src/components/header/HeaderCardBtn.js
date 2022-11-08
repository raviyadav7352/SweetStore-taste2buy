import classes from './HeaderCartButton.module.css'
const HeaderCartBtn = props =>{
    return (
        <button className={classes.button} onClick={props.onShowCart}> 
            <span className={`material-symbols-rounded ${classes.icon}`}>
                shopping_cart
            </span>
            <span>cart</span>
            <span className={classes.badge}>3</span>
        </button>
    )
}
export default HeaderCartBtn;