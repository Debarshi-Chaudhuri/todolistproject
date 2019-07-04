import ToDoInput from './ToDoInput.js';
import ToDoLists from './ToDoLists.js';
import React, { Component } from 'react';
class ToDos extends Component{
  constructor(props){
    super(props)
    this.state={elements:[],s:""};
  }
  addtolist=(event)=>{
    this.setState({elements:this.state.elements.concat(this.state.s),s:""})
    
    
  }
  remove=(index)=>{
    console.log(index);
    let left = this.state.elements.slice(0,index);
    let right=this.state.elements.slice(index+1);
    this.setState({elements:left.concat(right)})
    
      
  }
  
  input=(event)=>{
    this.setState({s:event.target.value});
  }
  
  render(){
    return(<div>
      <ToDoInput data={this.input} change={this.addtolist} val={this.state.s}/>
      <ToDoLists delete={this.remove} name={this.state.elements}/>
        </div>
    );
  }
}
export default ToDos;
