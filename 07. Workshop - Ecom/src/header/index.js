import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

class Header extends Component {
  state = {
    searchValue: ""
  }

  handleChange = (event) => {
    this.setState({
      searchValue: event.target.value
    })
  }

  render() {
    const { searchValue } = this.state
    return (
      <div className="header-container">
        <Link className="home-link" to={'/'}>SoftUni React.js course</Link>
        
        <Link className="checkout-link" to={'/checkout'}>Checkout</Link>
        <input value={searchValue} onChange={this.handleChange} placeholder="Search..." />
      </div>
    )
  }

}

export default Header