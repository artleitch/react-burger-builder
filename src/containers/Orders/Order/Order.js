import React from 'react'

import classes from './Order.css'

const order = (props) => {
  const ingredients = []
  for (let ingredientName in props.ingredients) {
    if (props.ingredients[ingredientName]) {
      ingredients.push({
        name: ingredientName,
        amount: props.ingredients[ingredientName],
      })
    }
  }
  const ingredientOutput = ingredients.map((ig) => {
    return (
      <span key={ig.name}>
        {ig.name} ({ig.amount})
      </span>
    )
  })
  return (
    <div className={classes.Order}>
      <p>Ingredients: </p>
      <p>{ingredientOutput}</p>
      <p>Price: ${props.price.toFixed(2)}</p>
    </div>
  )
}

export default order
