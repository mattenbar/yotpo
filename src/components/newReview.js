import React from 'react'
import {addReview} from '../actions/addReview';

class NewReview extends React.Component{

  state = {
    review:{
      "appkey": "yqGNRSNYfvNyAt0cqAnknRn8ZY8CzmZjbpDdvXlB",
      "domain": "http://menbarphotos.myshopify.com",
      "sku": "",
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
    debugger
    this.props.dispatchAddReview(this.state.review)
    this.setState({
      review:{
        "appkey": "yqGNRSNYfvNyAt0cqAnknRn8ZY8CzmZjbpDdvXlB",
        "domain": "http://menbarphotos.myshopify.com",
        "sku": "",
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
    return(
      <div className="newReview">
        <form onSubmit={this.handleReviewSubmit}>
          <div className='reviewForm'>
            <label>Product id</label>
            <input onChange={this.handleReviewChange} type="text" value={this.state.review.sku} name="sku" />
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
            <label>Review Score - input 1-5</label>
            <input onChange={this.handleReviewChange} type="text" value={this.state.review.review_score} name="review_score" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
  

}

function mDTP(dispatch){
  return {
    dispatchAddReview: (review) => dispatch(addReview(review))
  }
}

export default NewReview