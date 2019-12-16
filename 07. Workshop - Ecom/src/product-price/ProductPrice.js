import React from 'react'

const ProductPrice = ({ children }) => (
  <p className="product-price">
    Price: 
    {children}
  </p>
)

export default ProductPrice