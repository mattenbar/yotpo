const FETCH_ORDERS = "FETCH_ORDERS"

export function fetchOrders(data){

  return function(dispatch){
    
    fetch('https://api.yotpo.com/apps/yqGNRSNYfvNyAt0cqAnknRn8ZY8CzmZjbpDdvXlB/purchases?utoken=S1lfzSrxmSi2pBUqXERPJLV6mKtxVm0yWV3q2JrY')
      .then(res => res.json())
      .then(data => {
        console.log(data.response)
        dispatch({type: FETCH_ORDERS, payload: data.response})
      })
      .catch(err => console.error('error:' + err));
    }

} 

