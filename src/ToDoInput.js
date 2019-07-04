import React, { Component } from 'react';
class ToDoInput extends Component{
  
  render(){
    return(<div>
      <input type="text" value={this.props.val} onChange={this.props.data} placeholder="Enter text here"></input>
      <button onClick={this.props.change}>Add To List</button>
    </div>
    );
  }
}
export default ToDoInput;
