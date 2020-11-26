import * as actionTypes from './actionsTypes'
import axios from '../../axios-orders'

export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData,
  }
}

export const purchaseBurgerFail = (error) => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error,
  }
}

export const purchaseBurgerStart = (orderData) => {
  return (dispatch) => {
    axios
      .post('/orders.json', orderData)
      .then((response) => {
        dispatch(this.purchaseBurgerSuccess(response.data, orderData))
        // this.setState({ loading: false, purchasing: false })
        // this.props.history.push('/')
      })
      .catch((error) => {
        dispatch(this.purchaseBurgerFail(error))
        // this.setState({ loading: false, purchasing: false })
      })
  }
}
