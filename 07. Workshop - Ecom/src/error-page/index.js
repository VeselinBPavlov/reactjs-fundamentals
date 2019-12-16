import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
      Error Page
      <Link to="/">Go home</Link>
    </div>
  )
}

export default ErrorPage