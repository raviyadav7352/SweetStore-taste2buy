import classes from './MealItemForm.module.css'

const MealItemForm = props =>{
    return(
        <form className={classes.form}>
            <div className={classes.inputbox}>
            <label htmlFor={props.input.id}>Amount</label>
            <input {...props.input}/>
            </div>
            <button>+ Add</button>
        </form>
    )
}
export default MealItemForm;