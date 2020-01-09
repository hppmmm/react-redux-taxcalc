import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import addTax from "../actions/addTax";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
    this.inputText = React.createRef();
  }

  handleOnClick = (event) => {
    console.log(this.inputText.current.value);
    this.props.handleClick(this.inputText.current.value);
  }

render(){
  return(
    <div>
      <input type="text" defaultValue="" ref={this.inputText} />
      <button onClick={this.handleOnClick}>計算</button>
      <br />
      <p>{this.props.price}</p>
    </div>
  )
}

}

//小コンポーネントに値と関数を渡している
const mapStateToProps = (state) => ({price:state.price});
const mapDispatchToProps = (dispatch) => ({
  handleClick: price => dispatch(addTax(price))
});

export default App = connect(mapStateToProps,mapDispatchToProps)(App);
