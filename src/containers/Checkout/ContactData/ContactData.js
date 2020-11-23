import React, { Component } from 'react'
import axios from '../../../axios-orders'

import Button from '../../../components/UI/Button/Button'
import Spinner from '../../../components/UI/Spinner/Spinner'

import classes from './ContactData.css'

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    },
    loading: false,
  }

  orderHandler = (event) => {
    event.preventDefault()
    this.setState({ loading: true })
    console.log(this.props.ingredients)
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Art',
        address: {
          street: 'Test 123',
          zipCode: '1235',
          country: 'Australia',
        },
        email: 'abc@def.com',
      },
      deliveryMethod: 'fastest',
    }
    this.setState({ loading: true })
    axios
      .post('/orders.json', order)
      .then((response) => {
        this.setState({ loading: false, purchasing: false })
        this.props.history.push('/')
      })
      .catch((err) => {
        this.setState({ loading: false, purchasing: false })
      })
  }

  render() {
    let form = (
      <form>
        <label>Name:</label>
        <input type="text" name="name" placeholder="Your name" />
        <label>Email:</label>
        <input type="email" name="email" placeholder="Your email" />
        <label>Street address:</label>
        <input type="text" name="street" placeholder="Your street" />
        <label>Post code:</label>
        <input type="text" name="postalCode" placeholder="Your post code" />
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    )
    if (this.state.loading) {
      form = <Spinner />
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact data</h4>
        {form}
      </div>
    )
  }
}

export default ContactData
