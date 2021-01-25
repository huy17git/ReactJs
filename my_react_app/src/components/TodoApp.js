import React from "react";
import Header from "../layout/Header";
import Todos from "../components/Todos";
import AddTodo from "./AddTodo";

class TodoApp extends React.Component{
  state={
    todos:[
      {
        id:1,
        title:"Setup enviroment",
        completed: true
      },
      {
        id:2,
        title:"Develop website",
        completed: false
      },{
        id:3,
        title:"Deploy",
        completed: false
      },
    ]
  };

  handleCheckboxChange = (id) => {
    this.setState({todos: this.state.todos.map(todo =>{
      if (todo.id === id) {
          todo.completed = !todo.completed}
          return todo;
        })
    })
  };
  
    deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  addTodo = (title) => {
    console.log(title)
  }

  render(){
    return (
      <div className="container">
        <Header/>
        <AddTodo addTodo = {this.addTodo}/>
        < Todos todos={this.state.todos} handleChange={this.handleCheckboxChange} deleteTodo={this.deleteTodo}/>
      </div>
    );
  }
}
export default TodoApp;
