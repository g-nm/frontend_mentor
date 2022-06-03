const quantityReducer = (quantity, action) => {
  switch (action.type) {
    case 'add': {
      return quantity + 1;
    }
    case 'minus': {
      if (quantity === 0) {
        return 0;
      }
      return quantity - 1;
    }
    default: {
      throw Error('Unknown action:' + action.type);
    }
  }
};
// const item = {
//   1: {
// name: 'fall sneakers',
// url: '',
// alt: '',
// quantity: 3,
// price: 125,
//   },
// };

const cartReducer = (cartItems, action) => {
  switch (action.type) {
    case 'addToCart': {
      const { quantity } = action.payload;
      if (quantity <= 0) {
        return [...cartItems];
      }
      const isItemWithId = cartItems.find(({ id }) => action.payload.id === id);
      if (!isItemWithId) {
        return [...cartItems, { ...action.payload }];
      }
      const newItems = cartItems.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + action.payload.quantity,
          };
        }
        return cartItem;
      });

      return [...newItems];
    }

    case 'removeFromCart': {
      const { id } = action.payload;

      const filteredItems = cartItems.filter((cartItem) => cartItem.id !== id);

      return [...filteredItems];
    }
    default: {
      throw Error('Unknown action' + action.type);
    }
  }
};

export { quantityReducer, cartReducer };
