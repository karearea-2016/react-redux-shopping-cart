import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'

class ProductDetail extends Component {
  render() {
    const {id} = this.props.params
    const product = this.props.products.filter(p => p.get('id') == id ).first()
    const name = product.get('name')
    const price = product.get('price')
    const addToCart = (e) => {
      e.preventDefault()
      this.props.addToCart(id)
    }
    const deleteFromCart = (e) => {
      e.preventDefault()
      this.props.delete(id)
    }
    return (
      <div className='product' id={id}>
        <div> Detailed view of a product {name} {price}</div>
        <div><a href='' onClick={addToCart}>Add to Cart</a></div>
        <div><a href='' onClick={deleteFromCart}>Remove from Cart</a></div>
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

function mapDispatchToProps(dispatch) {//return state.delete(action.id)
  return {
    addToCart: (id) => {
      dispatch({ // redux dispatch function initiates a action
        type: 'ADD_PRODUCT_TO_CART',
        id: parseInt(id)
      })
    }
  }
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


export default connect(
  mapStateToProps,
  mapDispatchToProps,
  //mapDispatchFromProps
)(ProductDetail)
