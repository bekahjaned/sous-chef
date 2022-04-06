import React, { useState } from 'react'
import Button from './Button'
import { MealImage } from '../styles/MealImage'
import { RecipeWrap } from '../styles/RecipeWrap'
import { IngredientsList } from '../styles/IngredientsList'

function RecipeCard({ meal }) {
  const [toggle, setToggle] = useState(false)

  const ingredients = meal.ingredients.map((ingredient, index) => {
    return (
      <li key={index} style={{textAlign: 'left'}} >{ingredient}</li>
    )
  })

  const showIngredients = () => {
    setToggle(!toggle)
  }

  return (
    <RecipeWrap>
        <h2>{meal.name}</h2>
        <MealImage 
          src={require(`../data/images/${meal.image}.jpg`).default}
          alt={meal.name}
        />
        { meal.leftovers 
        ? <p>(enough for leftovers!)</p>
        : null 
        }
        <Button text="Click to see ingredients!" onClick={showIngredients}/>
          { toggle 
          ? <IngredientsList>
              <ul style={{textAlign: 'left'}}>
                {ingredients}
              </ul>
            </IngredientsList> 
          : null 
          } 
    </RecipeWrap>
  )
}

export default RecipeCard