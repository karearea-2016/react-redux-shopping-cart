import React from 'react'
import { Router, Route } from 'react-router'

import ProductList from './product-list.jsx'
import ProductDetail from './product-detail.jsx'
import Hello from './hello-world.jsx'

export default (
  <Router>
    <Route path='/' component={ProductList} />
    <Route path='/products/:id' component={ProductDetail}/>
    <Route path='/hello' component={Hello}/>
  </Router>
)
