import './App.css';
import React from 'react';
import { connect } from 'react-redux'

import Reviews from './components/reviews'
import NewReview from './components/newReview'
import NewOrder from './components/newOrder'

import {fetchReviews} from './actions/fetchReviews'
import {fetchProducts} from './actions/fetchProducts'
import {fetchOrders} from './actions/fetchOrders'

class App extends React.Component{

  //uToken= 'S1lfzSrxmSi2pBUqXERPJLV6mKtxVm0yWV3q2JrY'

  componentDidMount(){
    this.props.dispatchFetchReviews()
    this.props.dispatchFetchProducts()
    this.props.dispatchFetchOrders()
  }
 

  render(){
    return(
      <div className="App">
        <NewReview />
        <Reviews />
        <NewOrder />
      </div>
    )
  }
}

function mSTP(state){
  return {
    reviews: state.reviews,
    products: state.products,
    orders: state.orders
  }
}

function mDTP(dispatch){
  return {
    dispatchFetchReviews: (reviews) => dispatch(fetchReviews(reviews)),
    dispatchFetchProducts: (products) => dispatch(fetchProducts(products)),
    dispatchFetchOrders: (orders) => dispatch(fetchOrders(orders))
  }
}

export default connect(mSTP, mDTP)(App);
