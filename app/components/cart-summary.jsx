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
              let removeProduct =(e,id) => {
                e.preventDefault()
                this.props.removeProduct(id)
              }
              return <div key={idx}>
            {/*} itemCount(this.props.cart, product.get('id')}*/}
                        {product.get('name')} &nbsp;

                        {/*<button id="Add">+</button>*/}
                        <button id="Remove" onClick={removeProduct}>Remove</button>
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
    removeProduct: (id) => {
      dispatch ({
        type:'REMOVE_PRODUCT_FROM_CART',
        id: parseInt(id)
      })
    }
  }
}

{/*function itemCount(cart, id) {
  var qty = 0
  for (var i=0; i<cart.size; i++) {
    if (cart.get(i) == id) {
      qty++
    }
  }
  console.log(qty, 'here is quantity')
  return qty
}*/}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartSummary)
