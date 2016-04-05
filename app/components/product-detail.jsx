import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'

class ProductDetail extends Component {
  render() {
    const {id} = this.props.params
    const product = this.props.products.filter(p => p.get('id') == id ).first()
    const name = product.get('name')
    const price = product.get('price')
    const year = product.get('year')
    const addToCart = (e) => {
      e.preventDefault()
      this.props.addToCart(id)
    }
    return (
      <div className='product' id={id}>
        <div> Detailed view of a product {name}<p></p></div>
        <div> The cost of this model is {price}</div>
        <div> Model {year}</div>
        <div><p></p>
        <button class="Add"  onClick={addToCart}>ADD to cart</button></div>
       {/*<a href='' onClick={addToCart}>Add to Cart</a></div>*/}
        <div><Link to='/'>View all</Link></div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    products: state.get('products')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (id) => {
      dispatch({
        type: 'ADD_PRODUCT_TO_CART',
        id: parseInt(id)
      })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail)
