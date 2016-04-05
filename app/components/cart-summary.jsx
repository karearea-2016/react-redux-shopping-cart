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
            var quantity = countQuantity(this.props.cart, product.get('id'))

            return <div key={idx}>{product.get('name') + ' x' + quantity + ' $' + product.get('price')*quantity}</div>
          })}
        </div>
        <div className='total'>
          <h4>Total</h4>
          {'$' + this.props.products.reduce((sum, product) => {
            return sum + product.get('price') * countQuantity(this.props.cart, product.get('id'))
          }, 0)}
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

function countQuantity(cart, id){
  return cart.filter(function(productId){
    return productId === id
  }).size

}

export default connect(
  mapStateToProps
)(CartSummary)
