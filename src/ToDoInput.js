import React, { Component } from 'react';
class ToDoInput extends Component{
  
  render(){
    return(<div>
      <input type="text" onChange={this.props.data}></input>
      <button onClick={this.props.change}>Add To List</button>
    </div>
    );
  }
}
export default ToDoInput;
