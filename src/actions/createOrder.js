export const createOrder = (data) => {
  return (dispatch) => {
    fetch('https://api.yotpo.com/apps/yqGNRSNYfvNyAt0cqAnknRn8ZY8CzmZjbpDdvXlB/purchases/', {
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
      dispatch({type: 'CREATE_ORDER', payload: data})
    })
    .catch(err => console.error('error:' + err));
  }

} 