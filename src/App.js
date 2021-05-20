import './App.css';
import React from 'react';
import Reviews from './components/reviews'

class App extends React.Component{

  //uToken= 'S1lfzSrxmSi2pBUqXERPJLV6mKtxVm0yWV3q2JrY'
 

  render(){
    return(
      <div className="App">
        <Reviews />
      </div>
    )
  }
}

export default App;
