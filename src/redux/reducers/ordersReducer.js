const initialState = {
    orders: [
      { id: 1, customerName: 'Customer A', orderDate: '2022-05-01', status: 'Pending' },
      { id: 2, customerName: 'Customer B', orderDate: '2022-05-05', status: 'Shipped' },
    ],
  };
  
  const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_ORDER':
        return {
          ...state,
          orders: [...state.orders, action.payload],
        };
      case 'EDIT_ORDER':
        return {
          ...state,
          orders: state.orders.map((order) => (order.id === action.payload.id ? action.payload : order)),
        };
      case 'DELETE_ORDER':
        return {
          ...state,
          orders: state.orders.filter((order) => order.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default ordersReducer;
  