import React from 'react'


class Reviews extends React.Component{
  
  state = {
    reviews: {}
  }
  
  componentDidMount() {
    fetch('https://api.yotpo.com/v1/apps/yqGNRSNYfvNyAt0cqAnknRn8ZY8CzmZjbpDdvXlB/reviews?utoken=S1lfzSrxmSi2pBUqXERPJLV6mKtxVm0yWV3q2JrY'
    )
      .then(response => response.json())
      .then(data => 
        this.setState(
          {reviews: data.reviews}
        )
    )
  }

  render(){
    console.log(this.state.reviews[0])
    if (this.state.reviews.length > 0 ){
      let reviewDiv = this.state.reviews.map((r) =>
      {return(
        <div className='review' key={r.id}>
          <h3>Title: {r.title}</h3>
          <h4>id: {r.id}</h4>
          <h4>Content: {r.content}</h4>
          <h4>rating: {r.score}</h4>
          test 2
        </div>
        )
      }
    )
    
    
      return(
        <div className="reviewsContainer">
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

export default Reviews