import React, { Component } from 'react'
import axios from '../../axios-orders'

import classes from './Orders.css'
import Spinner from '../../components/UI/Spinner/Spinner'
import Order from './Order/Order'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  }
  constructor() {
    super()
    axios
      .get('/orders.json')
      .then((response) => {
        let fetchedOrders = []
        for (let key in response.data) {
          fetchedOrders.push({ ...response.data[key], id: key })
        }
        this.setState({ loading: false, orders: fetchedOrders })
      })
      .catch((response) => {
        this.setState({ loading: false })
      })
  }
  render() {
    let orders = <Spinner />
    if (!this.state.loading) {
      orders = this.state.orders.map((order) => {
        return (
          <Order
            ingredients={order.ingredients}
            price={+order.price}
            key={order.id}
          />
        )
      })
    }
    return <div className={classes.Orders}>{orders}</div>
  }
}

export default withErrorHandler(Orders)
