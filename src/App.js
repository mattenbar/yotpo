import './App.css';
import React from 'react';
import { connect } from 'react-redux'
import Reviews from './components/reviews'
import NewReview from './components/newReview'
import {fetchReviews} from './actions/fetchReviews'
import {fetchProducts} from './actions/fetchProducts'

class App extends React.Component{

  //uToken= 'S1lfzSrxmSi2pBUqXERPJLV6mKtxVm0yWV3q2JrY'

  componentDidMount(){
    this.props.dispatchFetchReviews()
    this.props.dispatchFetchProducts()
  }
 

  render(){
    return(
      <div className="App">
        <NewReview />
        <Reviews />
      </div>
    )
  }
}

function mSTP(state){
  return {
    reviews: state.reviews,
    products: state.products
  }
}

function mDTP(dispatch){
  return {
    dispatchFetchReviews: (reviews) => dispatch(fetchReviews(reviews)),
    dispatchFetchProducts: (products) => dispatch(fetchProducts(products))
  }
}

export default connect(mSTP, mDTP)(App);
