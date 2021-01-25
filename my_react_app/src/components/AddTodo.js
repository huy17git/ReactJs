import React from "react";

class AddTodo extends React.Component {

  state = {
    title : ""
  };
  onInputChange = (e)=>{
    this.setState({
      title : e.target.value
    });
  }
  addTodo = (e) => {
    e.preventDeafault();
    this.props.addTodo(this.state.title)
  }

  render(){
    return (
      <form className="form-container" onSubmit={this.addTodo} >
        <input type="text" placeholder="Add Todo.." className="input-text"
        value={this.state.title} onChange={this.onInputChange}
        ></input>
        <input type="submit" className="input-submit" ></input>
      </form>
    );
  }
}
export default AddTodo;