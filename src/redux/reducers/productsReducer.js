const initialState = {
    products: [
      { id: 1, name: 'Product A', category: 'Category A', price: 20.0, stockQuantity: 100 },
      { id: 2, name: 'Product B', category: 'Category B', price: 30.0, stockQuantity: 50 },
    ],
  };
  
  const productsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_PRODUCT':
        return {
          ...state,
          products: [...state.products, action.payload],
        };
      case 'EDIT_PRODUCT':
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === action.payload.id ? action.payload : product
          ),
        };
      case 'DELETE_PRODUCT':
        return {
          ...state,
          products: state.products.filter((product) => product.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default productsReducer;
  