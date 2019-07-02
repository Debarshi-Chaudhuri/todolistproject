import ToDoItem from './ToDoItem.js';
import React, { Component } from 'react';
class ToDoLists extends Component{
  render(){
    return(<div>{
                    this.props.name.map((element,index)=>
                          <ToDoItem remove={this.props.delete} element={element} index={index}/>)
          
           }
        </div>
       )
  }
}
export default ToDoLists;
