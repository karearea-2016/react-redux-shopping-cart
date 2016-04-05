import {fromJS} from 'immutable'

const INITIAL_STATE = fromJS({
  products: [
    {id: 1, name:'spaghetti', price: 2},
    {id: 2, name:'gold', price: 100},
    {id: 3, name:'rake', price: 15},
    {id: 4, name:'car', price: 500},
    {id: 5, name:'falcon', price: 2500}
  ],
  cart: [1,4]
})

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'ADD_PRODUCT_TO_CART':
      return state.set('cart', state.get('cart').push(action.id))
      break;
    case 'REMOVE_FROM_CART':
      var index = state.get('cart').toArray().findIndex(function(id){
        return id == action.id
      })
      if (index >= 0){
        return state.set('cart', state.get('cart').delete(index))
      }
      return state.set('cart', state.get('cart'))
      break;
    default:
      return state
  }
}
