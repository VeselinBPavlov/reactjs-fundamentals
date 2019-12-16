import React, { Fragment } from 'react'
import styles from './styles.module.css'
import ProductCard from '../product-card'
import Header from '../header'
import data from '../data'

const renderCards = (products) => {
  return products.map(product => {
    return (
      <Fragment key={product.id}>
        <ProductCard {...product} />
      </Fragment>
    )
  })
}

class ProductList extends React.Component {
  state = {
    ownerName: "" 
  }

  render() {

    return (
      <Fragment>
        <Header />
        <div>
          {this.state.ownerName}
        </div>
        <div className={styles.container}>
          {renderCards(data)}
        </div>
      </Fragment> 
    )
  }
}

export default ProductList
