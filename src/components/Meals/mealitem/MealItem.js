import classes  from './MealItem.module.css'
import MealItemForm from './MealItemForm';
const MealItem = props =>{
    const price = `₹${props.price}`
    return(
        
        <li className={classes.meal}>
            <div>
            <div><h4>{props.name}</h4></div>
            <div className={classes.description}>{props.discript}</div>
            <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm
                input={
                    {
                        id:`${props.id}`,
                        type:"number",
                        min:"1",
                        max:"10",
                        defaultValue:"1"

                    }}/>
            </div>
        </li>
    )
}
export default MealItem;