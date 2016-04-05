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
        <h4>Total</h4>

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
   var count = 0;
   for (var i = 0; i < cart.size; i++){
    if (cart.get(i) == id) {
      count++
    }
   }
   return count
}

function getTotal(){
  return 100
}


export default connect(
  mapStateToProps
)(CartSummary)
