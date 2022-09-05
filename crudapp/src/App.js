import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
 constructor(){
 super();
 this.state={
  title:'Dogs encyclopedia',
  employeeData:[],
  act:0,
  index:''
 }
}

handleSubmit =(e) => {
  e.preventDefault();
   let employeeData = this.state.employeeData;
   let name = this.refs.txtName.value;
   let age = this.refs.txtAge.value;

   if(this.state.act ===0){
    let newEmployee={
      "name": name,
      "age": age
     }
     employeeData.push(newEmployee);
   }
   else{
    let index = this.state.index;
    let employeeData = this.state.employeeData;
    employeeData[index].name = name;
    employeeData[index].age = age;

   }
   this.setState({
    employeeData:employeeData,
    act:0
   })

   this.refs.myForm.reset();
}

handleDelete =(i)=>{
  let employeeData = this.state.employeeData;
  employeeData.splice(i,1);
  this.setState({
   employeeData:employeeData
  });
}
handleEdit =(i)=>{
  let employeeData = this.state.employeeData[i];
  this.refs.txtName.value= employeeData.name;
  this.refs.txtAge.value = employeeData.age;
  this.setState({
    employeeData:employeeData,
    act:1,
    index:i
  })
}
  render() {
    let employeeData = this.state.employeeData;
    return (
      <div>
        
      <form ref="myform" className='myform'>
      <h1>{this.state.title}</h1>
        <label>Name:</label>
        <input type="text" ref="txtName" placeholder='Enter Name' className='formfield'/>
        <label>Present Age</label>
        <input type="text" ref="txtAge"  placeholder='Enter Age' className='formfield'/>
        <button className='myButton' onClick={e=> this.handleSubmit(e)}>Save</button>
      </form>
      <table className='table'>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Edit</th>
          <th>Delete</th>

        </tr>
        {
          employeeData.map((data,i)=>
          <tr key={i}>
            <td>{data.name}</td>
            <td>{data.age}</td>
            <td>
              <button  className='myButton' onClick={i => this.handleEdit(i)}>Edit</button>
            </td>
            <td>
              <button className='myButton'  onClick={i=>this.handleDelete(i)}>Delete</button>
            </td>

          </tr>
          )
        }
      </table>
      </div>
    )
  }
}

