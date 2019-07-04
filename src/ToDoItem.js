import React, { Component } from 'react';
import './App.css';
class ToDoItem extends Component{
  render(){
    return(
      <li >{this.props.element}
      <button onClick={()=>this.props.remove(this.props.index)} class="glyphicon glyphicon-trash"></button>
        </li>
    )
  }
}
export default ToDoItem;
