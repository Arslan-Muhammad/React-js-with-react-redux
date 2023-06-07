import React, { Component } from 'react'
import Counter from './Components/Counter';
import Button from './Components/Button';
import Checkout from './Components/Checkout';
import { connect } from "react-redux"
export class App extends Component {

  render() {
    return (
      <div>
        <Counter counter={this.props.counter} />
        <Button
          click1={() => this.props.modifyHandler('DEC', 1)}
          click2={() => this.props.modifyHandler('INC', 1)}
          click3={() => this.props.modifyHandler('INC', 2)}
          click4={() => this.props.modifyHandler('DEC', 2)}
        />
        <Checkout price={this.props.price}
          counter={this.props.counter} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    price: state.price,
  }
};
const mapActionsToProps = (dispatch) => {
  return {
    modifyHandler: (action, value) => {
      dispatch({
        type: action,
        data: value,
      })
    }
  }
}


export default connect(mapStateToProps, mapActionsToProps)(App);
