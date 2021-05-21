export const createOrder = (data) => {
  debugger
  return (dispatch) => {
    fetch('https://api.yotpo.com/apps/app_key/purchases/', {
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