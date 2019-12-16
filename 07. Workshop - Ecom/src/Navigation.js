import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import ProductList from './product-list'
import ProductPage from './product-page'
import CheckoutPage from './checkout-page'
import ErrorPage from './error-page'
import ContextWrapper from './ContextWrapper';

const Navigation = () => {
  return (
    <ContextWrapper>
      <Router>
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/product/:id" component={ProductPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    </ContextWrapper>
  )
}

export default Navigation