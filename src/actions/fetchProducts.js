const FETCH_PRODUCTS = "FETCH_PRODUCTS"

export function fetchProducts(data){

  return function(dispatch){
    
    fetch('https://api.yotpo.com/v1/apps/yqGNRSNYfvNyAt0cqAnknRn8ZY8CzmZjbpDdvXlB/products?utoken=S1lfzSrxmSi2pBUqXERPJLV6mKtxVm0yWV3q2JrY')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        dispatch({type: FETCH_PRODUCTS, payload: data.products})
      })
    }

} 