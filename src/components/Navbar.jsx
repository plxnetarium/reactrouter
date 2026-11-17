import React from 'react'
import { Link } from 'react-router'

function Navbar() {
  return (
    <div>
      <nav>
      <Link to='/'>Homepage    </Link>
      <Link to='/products'>Products   </Link>
      <Link to='/products/new-product'>new products</Link>
    </nav>
    </div>
  )
}

export default Navbar
