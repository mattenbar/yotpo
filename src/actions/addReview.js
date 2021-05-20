export const addReview = (data) => {

  return (dispatch) => {
    fetch('https://api.yotpo.com/v1/widget/reviews', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(review=> {
      if (review.success) {
        alert(review.success)
        dispatch({type: 'ADD_REVIEW', payload: review})
        
      } else if (review.errors) {
      
      alert(review.errors.map(error => error))
      }
    })
  }
}