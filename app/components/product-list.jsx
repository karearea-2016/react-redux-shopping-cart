import React, {Component} from 'react'
import ProductSummary from './product-summary.jsx'
import {connect} from 'react-redux'

class ProductList extends Component {
  render() {
    const productSummaries = this.props.products.map( product => {
      return <ProductSummary key={product.get('id')} product={product} />
    })
    return (
      <div id='productList'>
      <h1>Product List</h1>
      { productSummaries }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    products: state.get('products')
  };
}

export default connect(mapStateToProps)(ProductList)
