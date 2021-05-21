import React from 'react'
import {connect} from 'react-redux';
import {createOrder} from '../actions/createOrder';

class NewOrder extends React.Component{

  state = {
    order:{
      "platform": "shopify",
      "utoken": "S1lfzSrxmSi2pBUqXERPJLV6mKtxVm0yWV3q2JrY",
      "email": "",
      "customer_name": "",
      "order_id": Math.random()*10000,
      "order_date": "",
      "currency_iso": "USD",
      "products": {
        "SKUaaa12": {
          "url": "http://example_product_url1.com",
          "name": "product1",
          "image": "http://images2.fanpop.com/image/photos/13300000/A1.jpg",
          "description": "this is the description of a product",
          "price": "100",
          "specs": {
          "upc": "USB",
          "mpn": "100-100-0.100-1000-A",
          "brand": "samplebrand",
          "isbn": "thingy",
          "ean": "0012345678905",
          "external_sku":"000SKU123",
          },
          "product_tags": "book"
        }
      }
    }
  }

  handleOrderChange = (event) => {
    event.preventDefault()
    let order = {...this.state.order}
    let currentState = order
    let {name, value} = event.target 
    currentState[name] = value
    this.setState({
      order: currentState
    })
  }

  handleOrderSubmit = (e) => {
    
    e.preventDefault()
    this.props.dispatchCreateOrder(this.state.order)
    this.setState({
      order:{
        "platform": "general",
        "utoken": "S1lfzSrxmSi2pBUqXERPJLV6mKtxVm0yWV3q2JrY",
        "email": "",
        "customer_name": "",
        "order_id": "",
        "order_date": "",
        "currency_iso": "USD",
        "products": {
          "SKUaaa12": {
            "url": "http://example_product_url1.com",
            "name": "product1",
            "image": "http://images2.fanpop.com/image/photos/13300000/A1.jpg",
            "description": "this is the description of a product",
            "price": "100",
            "specs": {
              "upc": "USB",
              "mpn": "100-100-0.100-1000-A",
              "brand": "samplebrand",
              "isbn": "thingy",
              "ean": "0012345678905",
              "external_sku":"000SKU123",
            },
            "product_tags": "book"
          }
        }
      }
    })
  }

  render(){
    if(this.props.products){
      
    let productsList = this.props.products.map(product => product.images.length === 0 ? null:   <option key={product.id} value={product} name="sku" onChange={this.handleOrderChange}> {product.id} - {product.name}</option>)
   
    return(
      <div className='newOrderContainer'>
        <h1>NEW ORDER:</h1>
        <div className="newOrder">
        <form onSubmit={this.handleOrderSubmit}>
          <div className='orderForm'>
            <label>Product</label><br/><br/>
            <select value={this.state.product} name="products" onChange={this.handleOrderChange}>
              <option >Choose Product...</option>
              {productsList}
            </select>
          </div>
          
          <div className='orderForm'>
              <label>Customer Name</label>
              <input onChange={this.handleOrderChange} type="text" value={this.state.order.customer_name} name="customer_name" />
          </div>

          <div className='orderForm'>
            <label>Email:</label>
            <input onChange={this.handleOrderChange} type="email" value={this.state.order.email} name="email" />
          </div>

          <div className='orderForm'>
            <label>Date:</label>
            <input onChange={this.handleOrderChange} type="date" value={this.state.order.order_date} name="order_date" />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
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

function mSTP(state){
  return {
    products: state.products
  }
}

function mDTP(dispatch){
  return {
    dispatchCreateOrder: (order) => dispatch(createOrder(order))
  }
}

export default connect(mSTP, mDTP)(NewOrder)