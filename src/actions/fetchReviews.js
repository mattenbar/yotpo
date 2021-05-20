const FETCH_REVIEWS = "FETCH_REVIEWS"

export function fetchReviews(data){

  return function(dispatch){
    
    fetch('https://api.yotpo.com/v1/apps/yqGNRSNYfvNyAt0cqAnknRn8ZY8CzmZjbpDdvXlB/reviews?utoken=S1lfzSrxmSi2pBUqXERPJLV6mKtxVm0yWV3q2JrY')
      .then(res => res.json())
      .then(data => {
        
        dispatch({type: FETCH_REVIEWS, payload: data.reviews})
      })
    }

} 