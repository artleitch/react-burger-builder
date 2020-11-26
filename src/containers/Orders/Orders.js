import React, { Component } from 'react'
import axios from '../../axios-orders'
import * as actions from '../../store/actions/'
import { connect } from 'react-redux'

import classes from './Orders.css'
import Spinner from '../../components/UI/Spinner/Spinner'
import Order from './Order/Order'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  }
  componentDidMount() {
    this.props.onFetchOrders()
  }
  render() {
    let orders = <Spinner />
    if (!this.props.loading) {
      orders = this.props.orders.map((order) => {
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

const mapStateToProps = (state) => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchOrders: () => dispatch(actions.fetchOrders()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, axios))
