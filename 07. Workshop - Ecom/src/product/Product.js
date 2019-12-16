import React from 'react'

class Product extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0
    }
  }

  handleClick = (event) => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    const { product, Price } = this.props
    return (
      <div className="product-tile">
        <img className="product-image" src={product.image} alt={product.title} />
        <div>
          <span className="product-brand">{product.brand}</span>
          <span className="product-title">{product.title}</span>
          <Price>
            <span>
              Price: {product.price}$
            </span>
          </Price>
        </div>
        <button onClick={this.handleClick}>Click me: {this.state.counter}</button>
      </div>
    )
  }
  
}

export default Product