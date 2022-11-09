import React, { useContext } from 'react'
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm';
import CartContext from '../../store/cart-context'

const MealItem = props => {
    const cartctx = useContext(CartContext)

    const price = `₹${props.price}`
    const addToCartHandler = amount => {
        cartctx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price

        })
    }

    return (
        <li className={classes.meal}>
            <div className='details'>
                
                <div><h4>{props.name}</h4></div>
                <div className={classes.description}>{props.discript}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div className={classes.formbox}>
                <img src={`images/${props.image}.jpg`} alt="tasty sweet"/>
                <MealItemForm
                    onAddToCart={addToCartHandler}
                    input={
                        {
                            id: props.id,
                            type: "number",
                            min: "1",
                            max: "10",
                            defaultValue: "1",


                        }} />
            </div>
        </li>
    )
}
export default MealItem;