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
    .then(data => {
      console.log(data)
      dispatch({type: 'ADD_REVIEW', payload: review})
    })
    .catch(err => console.error('error:' + err));
  }

} 