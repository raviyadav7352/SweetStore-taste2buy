import { Fragment, useState, useEffect } from "react"
import Card from "../UI/Card";
import classes from './AvailableMeals.module.css'
import MealItem from "./mealitem/MealItem";


const mealData = [
  {
    id: 'm6',
    name: 'pasta',
    description: 'Healthy...and green...',
    price: 100,
    image: "pasta"
  },
];


const AvailableMeals = () => {
  const [mealData, setMealData] = useState([])
  const [isLoading, setIsloading]=useState(true)
  const [isErrror, setIsError]=useState()
  
  useEffect(() => {
    const fetchItemData = async () => {
      const response = await fetch("https://food-order-7352-default-rtdb.asia-southeast1.firebasedatabase.app/itemData.json");
      
      if(!response.ok){
        throw new Error("fetch data not found")
      }
      const data = await response.json()
      const itemData = [];
      for (let key in data) {
        itemData.push({
          id: key,
          price: data[key].price,
          description: data[key].description,
          name: data[key].name,
          image: data[key].image
        })
      }
      setMealData(itemData)
      setIsloading(false)
    }
    fetchItemData().catch(error=>{
      setIsloading(false)
      setIsError(error.message)
    });
  }, [])

  if(isLoading){
    return(
      <section className={classes.meals}>
        <div className={classes.loading}><div className={classes.customloader}></div></div>
    </section>
    )
  }
  if(isErrror){
    return(
    <section className={classes.meals}>
      <p className={classes.loading}>{isErrror}</p>
    </section>
    )
  }
  const MealList = mealData.map((meal) =>
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      price={meal.price}
      image={meal.image}
      discript={meal.description}
    />)
  return (
      <section className={classes.meals}>
        <Card>
          <ul>{MealList} </ul>
        </Card>
      </section>
  )
}
export default AvailableMeals;