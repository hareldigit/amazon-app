export const initialState = { basket: [], user: null }

const getUserNameFromEmail = (email) => {
  let userName = null
  if (email) {
    var splited = email.split('@')
    userName = splited[0]
  }
  return userName
}

const isExistsOnBasket = (item, basket) => {
  return basket.some((p) => p.id === item.id)
}

const addToBasket = (action, state) => {
  var basket = []
  if (isExistsOnBasket(action.item, state.basket)) {
    basket = changeQuantity(action.item.id, state.basket)
  } else {
    basket = addNewItem(action.item, state.basket)
  }
  return basket
}

const changeQuantity = (id, basket, quantity) => {
  const items = basket?.filter((p) => p.id !== id)
  const item = basket?.filter((p) => p.id === id)[0]
  const updatedItem = setQuantity(item, quantity ?? item.quantity + 1)
  basket = items ? [...items, updatedItem] : [updatedItem]
  return basket
}

const setQuantity = (item, quantity) => {
  const updatedItem = { ...item, quantity }
  return updatedItem
}

const addNewItem = (item, basket) => {
  return [...basket, { ...item, quantity: 1 }]
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'EMPTY_BASKET': {
      return {
        ...state,
        basket: [],
      }
    }
    case 'ADD_TO_BASKET': {
      return {
        ...state,
        basket: addToBasket(action, state),
      }
    }
    case 'REMOVE_FROM_BASKET': {
      return {
        ...state,
        basket: [...state.basket.filter((p) => p.id !== action.item.id)],
      }
    }
    case 'CHANGE_QUANTITY': {
      return {
        ...state,
        basket: changeQuantity(
          action.item.id,
          state.basket,
          action.item.quantity,
        ),
      }
    }
    case 'SET_USER': {
      return {
        ...state,
        user: {
          ...action.user,
          userName: getUserNameFromEmail(action.user?.email),
        },
      }
    }
    default: {
      return state
    }
  }
}

export default reducer
