import React from 'react'
import { connect } from "react-redux";


class Reviews extends React.Component{
  
  state = {
    reviews: {}
  }
  
  
  render(){
    if (this.props.state.reviews){
      let reviewDiv = this.props.state.reviews.map((r) =>
      {
        if(r.title === undefined)
        {
          return null
        }
        else
        {
          this.handleUpVote = (e) => {
            e.preventDefault()
            fetch(`https://api.yotpo.com/reviews/${r.id}/vote/up`,{
              method: 'POST',
              headers: {Accept: 'application/json', 'Content-Type': 'application/json'}
            })
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(err => console.error('error:' + err));
        
          } 
        console.log(r)
        return(
        <div className='review' key={r.id}>
          <h3>Title: {r.title}</h3>
          <h4>id: {r.id}</h4>
          <h4>Content: {r.content}</h4>
          <h4>rating: {r.score}</h4>
          <h4>votes: {r.votes_up}</h4>
          <button onClick={this.handleUpVote}>Vote Up</button>
        </div>
        )
      }
    }
    )
    
    
      return(
        <div className="reviewsContainer">
          <h1>REVIEWS:</h1>
          {reviewDiv}
        </div>
      )
    }else{
      return(
        <div className="reviewsContainer">
          

        </div>
      )

    }
}
}

function mSTP(state) {
  return {
    state: state,
   
  }
}

export default connect(mSTP)(Reviews)