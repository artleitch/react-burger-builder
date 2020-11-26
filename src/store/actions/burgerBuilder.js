import * as actionTypes from './actionsTypes'
import axios from '../../axios-orders'

export const addIngredient = (name) => {
  return {
    ingredientName: name,
    type: actionTypes.ADD_INGREDIENT,
  }
}

export const removeIngredient = (name) => {
  return {
    ingredientName: name,
    type: actionTypes.REMOVE_INGREDIENT,
  }
}

export const setIngredients = (ingredients) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients,
  }
}

export const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED,
  }
}

export const initIngredients = () => {
  return (dispatch) => {
    axios
      .get('https://react-burger-builder-909bf.firebaseio.com/ingredients.json')
      .then((response) => {
        dispatch(setIngredients(response.data))
      })
      .catch((error) => {
        dispatch(fetchIngredientsFailed())
      })
  }
}
