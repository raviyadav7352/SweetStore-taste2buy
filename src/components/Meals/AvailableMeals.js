import { Fragment } from "react"
import Card from "../UI/Card";
import classes from './AvailableMeals.module.css'
import MealItem from "./mealitem/MealItem";

const mealData = [
  {
    id: 'm1',
    name: 'Butter Paneer',
    description: 'Natural and veggies',
    price: 220,
  },
  {
    id: 'm2',
    name: 'Veg Pulao',
    description: 'A Gujrat specialty!',
    price: 160,
  },
  {
    id: 'm3',
    name: 'Veg Burger',
    description: 'Lazeez tasty fill',
    price: 120,
  },
  {
    id: 'm4',
    name: 'Dark Choco',
    description: 'Healthy...and green...',
    price: 180,
  },
];


const AvailableMeals = () => {
  const MealList = mealData.map((meal) =>
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      price={meal.price}
      discript={meal.description}
    />)
  return (
    <Fragment>
      <section className={classes.meals}>
        <Card>
          <ul>{MealList} </ul>
        </Card>
      </section>
    </Fragment>
  )
}
export default AvailableMeals;