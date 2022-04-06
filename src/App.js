import React, { useState } from 'react'
import Header from './components/Header';
import RecipesSection from './components/RecipesSection';
import Button from './components/Button';

import mealList from './data/recipes.json'

function App() {
  const [meals, setMeals] = useState([mealList[0], mealList[1], mealList[2]])
  // const [groceries, setGroceries] = useState([])

  // sometimes this will return an array of only 2 or 1 meals
  // not sure why yet
  const getRandomMeals = () => {
    const newMeals = []
    for(let i = 0; i < 3; i++) {
      let num = Math.floor(Math.random() * mealList.length)
      if(newMeals.indexOf(mealList[num]) === -1) {
        newMeals[i] = mealList[num ]
      }
    }
    setMeals(newMeals)
  }

  

  return (
    <div>
      <Header text="What to eat?!" />
      <main>
        <Button text="Get meals" onClick={getRandomMeals} />
        <RecipesSection meals={meals} />
      </main>
    </div>
  );
}

export default App;
