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
              let deleteFromCart =(e,id) => {
                e.preventDefault()
                this.props.deleteFromCart(id)
              }
              return <div key={idx}>
                        {itemCount(this.props.cart, product.get('id'))}
                        {product.get('name')}

                        {/*<button id="Add">+</button>*/}
                        <button id="Remove" onClick={removeProduct}>-</button>
                    </div>
              })}
              <div className='total'>
                {products.reduce((sum, product) => {
                  return sum + product.get('price') * itemCount(this.props.cart, product.get('id'))
                }, 0)}
        </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    products: state.get('products'),
    cart: state.get('cart'),
    price: state.get('price')
  };
}
function mapDispatchFromProps(dispatch){ {/*return state.delete(action.id)*/}
  return {
    deleteFromCart: (id) => {
      dispatch({
         type: 'DELETE_PRODUCT_FROM_CART',
         id: parseInt(id)
      })
    }
  }
}
function itemCount(cart, id) {
  return cart.filter(function(product) {
    return product == id
  }).size
}



export default connect(
  mapStateToProps,
  mapDispatchFromProps
)(CartSummary)
