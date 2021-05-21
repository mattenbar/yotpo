export default function manageReviews(state = [], action) {
  switch (action.type) {
      case "FETCH_REVIEWS":
        return {
          ...state,
          reviews: action.payload
        }
      
      case "FETCH_ORDERS":
        return {
          ...state,
          orders: action.payload
      }
      
      case "FETCH_PRODUCTS":
        return {
          ...state,
          products: action.payload
      }
      
      case 'ADD_REVIEW':
        return state.concat(action.payload);
  
      default:
        return state;
  }
}
