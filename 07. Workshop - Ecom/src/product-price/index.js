import React, { Component } from 'react'
import './styles.css'
import { AuthContext } from '../ContextWrapper'

class ProductPrice extends Component {
  static contextType = AuthContext
  render() {
    const {
      price
    } = this.props

    if (!price) {
      return null
    }

    return (
      <div className="product-price">
        Price: 
        <span>
          {price}$
        </span>
        {this.context.auth ? (
          <p>You have a 10% discount!</p>
        ) : null}
      </div>
    )
  }
}

export default ProductPrice