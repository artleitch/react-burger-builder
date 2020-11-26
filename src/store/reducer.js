import * as actionTypes from './actions'

const initialState = {
  ingredients: {
    meat: 0,
    salad: 0,
    bacon: 0,
    cheese: 0,
  },
  totalPrice: 4,
}

const reducer = (state = initialState, action) => {
  let newIngredients
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      newIngredients = { ...state.ingredients }
      return {
        ...state,
        ingredients: newIngredients,
        [action.ingredientName]: newIngredients[action.ingredientName] + 1,
      }
    case actionTypes.REMOVE_INGREDIENT:
      newIngredients = { ...state.ingredients }
      return {
        ...state,
        ingredients: newIngredients,
        [action.ingredientName]: newIngredients[action.ingredientName] - 1,
      }
    default:
      return {}
  }
}

export default reducer
