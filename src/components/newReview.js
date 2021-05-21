import React from 'react'
import {connect} from 'react-redux';
import {addReview} from '../actions/addReview';

class NewReview extends React.Component{

  state = {
    review:{
      "appkey": "yqGNRSNYfvNyAt0cqAnknRn8ZY8CzmZjbpDdvXlB",
      "domain": "http://menbarphotos.myshopify.com",
      "sku": "",
      "product_title": '',
      "product_image_url": "",
      "display_name": "",
      "email": "",
      "review_content": "",
      "review_title": "",
      "review_score": 5
    }
  }

  handleReviewChange = (event) => {
    event.preventDefault()
    let review = {...this.state.review}
    let currentState = review
    let {name, value} = event.target 
    currentState[name] = value
    this.setState({
      review: currentState
    })
  }

  handleReviewSubmit = (e) => {
    
    e.preventDefault()
    this.props.dispatchAddReview(this.state.review)
    this.setState({
      review:{
        "appkey": "yqGNRSNYfvNyAt0cqAnknRn8ZY8CzmZjbpDdvXlB",
        "domain": "http://menbarphotos.myshopify.com",
        "sku": "",
        "product_title": '',
        "product_image_url": "",
        "display_name": "",
        "email": "",
        "review_content": "",
        "review_title": "",
        "review_score": 5
      }
    })
  }

  render(){
    if(this.props.products){
      
    let productsListID = this.props.products.map(product => product.images.length === 0 ? null:   <option key={product.id} value={product.id} name="sku" onChange={this.handleReviewChange}> {product.id} - {product.name}</option>)
    let productsListName = this.props.products.map(product => product.images.length === 0 ? null: <option key={product.name} value={product.product_title} name="product_title" onChange={this.handleReviewChange}> {product.name}</option>)
    
    return(
      <div className='newReviewContainer'>
        <h1>NEW REVIEW:</h1>
        <div className="newReview">
        <form onSubmit={this.handleReviewSubmit}>
          <div className='reviewForm'>
            <label>Product id</label><br/><br/>
            <select value={this.state.review.sku} name="sku" onChange={this.handleReviewChange}>
              <option >Choose Product...</option>
              {productsListID}
            </select>
          </div>
          <div className='reviewForm'>
            <label>Product Name - must match name above</label><br/><br/>
            <select value={this.state.review.product_title} name="product_title" onChange={this.handleReviewChange}>
              <option >Choose Product...</option>
              {productsListName}
            </select>
          </div>
          <div className='reviewForm'>
            <label>Title</label>
            <input onChange={this.handleReviewChange} type="text" value={this.state.review.review_title} name="review_title" />
          </div>
          <div className='reviewForm'>
            <label>Review Content</label>
            <input onChange={this.handleReviewChange} type="text" value={this.state.review.review_content} name="review_content" />
          </div>
          <div className='reviewForm'>
            <label>Name</label>
            <input onChange={this.handleReviewChange} type="text" value={this.state.review.display_name} name="display_name" />
          </div>
          <div className='reviewForm'>
            <label>Email</label>
            <input onChange={this.handleReviewChange} type="email" value={this.state.review.email} name="email" />
          </div>
          <div className='reviewForm'>
            <label>Review Score: input 1-5</label>
            <input onChange={this.handleReviewChange} type="number" min="1" max="5" value={this.state.review.review_score} name="review_score" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      </div>
      
    )
  
  }else{
    return(
      <>

      </>
    )
  }
    
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
    dispatchAddReview: (review) => dispatch(addReview(review))
  }
}

export default connect(mSTP, mDTP)(NewReview)