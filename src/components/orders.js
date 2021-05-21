import React from 'react'
import { connect } from "react-redux";
import moment from 'moment';


class Orders extends React.Component{
  
  
  render(){
    
    if (this.props.state.orders && this.props.state.orders.purchases.length > 0){

      let ordersDiv = this.props.state.orders.purchases.map((o) =>
      {
        return(
        <li className='order' key={o.order_id}>
          <p>order id: {o.order_id}</p>
          <p>order date: {moment(o.order_date).format("dddd, MMMM Do YYYY")}</p>

        </li>
        )
      }
    )
    
    
      return(
        <div className="ordersContainer">
          <h1>ORDERS:</h1>
          <h2>Total Orders: {this.props.state.orders.purchases.length}</h2>
          <ol>{ordersDiv}</ol>
        </div>
      )
    }else{
      return(
        <>

        </>
      )

    }
}
}

function mSTP(state) {
  return {
    state: state,
   
  }
}

export default connect(mSTP)(Orders)