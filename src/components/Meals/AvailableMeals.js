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
    image:"butterpanner"
  },
  {
    id: 'm2',
    name: 'Veg Pulao',
    description: 'A Gujrat specialty!',
    price: 160,
    image:"pulao"
  },
  {
    id: 'm3',
    name: 'Veg Burger',
    description: 'Lazeez tasty fill',
    price: 60,
    image:"burger"
  },
  {
    id: 'm4',
    name: 'Sandwich',
    description: 'Healthy...and green...',
    price: 80,
    image:"sandwich"
  },
  {
    id: 'm5',
    name: 'pizza',
    description: 'fully loades cheese',
    price: 210,
    image:"pizza"
  },
  {
    id: 'm6',
    name: 'pasta',
    description: 'Healthy...and green...',
    price: 100,
    image:"pasta"
  },
];


const AvailableMeals = () => {
  const MealList = mealData.map((meal) =>
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      price={meal.price}
      image = {meal.image}
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