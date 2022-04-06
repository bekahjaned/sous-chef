import React from 'react'
import RecipeCard from './RecipeCard'

function RecipesSection({ meals }) {
  const showMeals = meals.map((meal, index) => {
    return (
      <RecipeCard meal={meal} key={index} />
    )
  })

  return (
    <section>
        {showMeals}
    </section>
  )
}

export default RecipesSection