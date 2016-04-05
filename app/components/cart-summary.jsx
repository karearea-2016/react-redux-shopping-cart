import React, {Component} from 'react'
import {connect} from 'react-redux'

class CartSummary extends Component {
  render() {
    const products = this.props.products.filter(p => {
      return this.props.cart.includes(p.get('id'))
    })

    return (
      <div id='cart'>
        <h4>Shopping Cart</h4>
        <div className='products'>
          {products.map((product, idx) => {
            const removeFromCart = (e, id) => {
              e.preventDefault()
              this.props.removeFromCart(id)
            }
            return
            <div key={idx}>
              {quantity(this.props.cart, product.get('id'))}
              {product.get('name')}
              <button onClick={removeFromCart}>Remove from Cart</button>
            </div>
          })}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    products: state.get('products'),
    cart: state.get('cart')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeFromCart: (id) => {
      dispatch({
        type: 'REMOVE_PRODUCT_FROM_CART',
        id: parseInt(id)
      })
    }
  }
}

function quantity(cart, id){
  return cart.filter(function(product){
    return product == id
  }).size
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(CartSummary)
