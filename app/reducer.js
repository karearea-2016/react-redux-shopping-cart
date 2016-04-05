import {fromJS} from 'immutable'

const INITIAL_STATE = fromJS({
  products: [
    {id: 1, name:'spaghetti', price:5},
    {id: 2, name:'gold', price:10},
    {id: 3, name:'rake', price:15},
    {id: 4, name:'car', price:20},
    {id: 5, name:'falcon', price:25}
  ],
  cart: [1,4]
})

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'ADD_PRODUCT_TO_CART':
      return state.set('cart', state.get('cart').push(action.id))
    case 'REMOVE_PRODUCT_FROM_CART':
      var productId = action.id
      var productIndex = state.get('cart').findIndex(function(product){
        return product === productId
      })
      return state.deleteIn(['cart', productIndex])
    default:
      return state
  }
}

