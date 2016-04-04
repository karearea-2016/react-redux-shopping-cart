import {fromJS} from 'immutable'

const INITIAL_STATE = fromJS({
  products: [
    {id: 1, name:'spaghetti'},
    {id: 2, name:'gold'},
    {id: 3, name:'rake'},
    {id: 4, name:'car'},
    {id: 5, name:'falcon'}
  ],
  cart: [1,4]
})

export default (state = INITIAL_STATE, action) => {
  if (typeof state === 'undefined') {
    return 0
  }
  switch(action.type) {
    case 'ADD_PRODUCT_TO_CART':
      return state.set('cart', state.get('cart').push(action.id))
    case 'INCREMENT':
        return state + 1
    case 'DECREMENT':
        return state - 1
    default:
      return state
  }
}

