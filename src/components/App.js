import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import appAction from "../actions/appAction";

class App extends React.Component{
  constructor(props){
    super(props);
    this.inputText = React.createRef();
  }

  handleOnClick = (event) => {
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

const mapStateToProps = (state) => ({price:state.price});
const mapDispatchToProps = (dispatch) => ({
  handleClick: price => dispatch(appAction(price))
});

// AppContainerがAppにSTOREに接続するためのツールを渡しているイメージ
// 上記２つのメソッドがあるからこそAppはthis.props.priceやthis.props.handleClickを使用できる
// AppContainer (wrapper App)
let AppContainer = connect(mapStateToProps,mapDispatchToProps)(App);
export default AppContainer;
