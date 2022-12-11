import classes from './MealItemForm.module.css'
import React,{useRef} from 'react';


const MealItemForm = props =>{
    const amountInputRef =useRef()

    const  submitHandler = (e) =>{
        e.preventDefault();
        const inputvaue = amountInputRef.current.value;
        const enteredAmount =+ inputvaue
        props.onAddToCart(enteredAmount)
        console.log(enteredAmount)
    
    }
   
    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.inputbox}>
        
            <input 
            ref={amountInputRef} 
            {...props.input}
            type="number" min="1" max="10" defaultValue="1"/>
            </div>
            <button>+ Add</button>
        </form>
    )
}
export default MealItemForm;