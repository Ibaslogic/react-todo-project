import React from "react"
import Header from "./Header"
import InputTodo from "./InputTodo"
import TodosList from "./TodosList";
import { v4 as uuidv4 } from "uuid";

class TodoContainer extends React.Component {

  state = {
    todos: []
  };
  
  componentDidMount() {
    let temp = localStorage.getItem("todos")
    let loadedTodos = JSON.parse(temp)
    if (loadedTodos) {
      this.setState({
        todos: loadedTodos
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.todos !== this.state.todos) {
      const temp = JSON.stringify(this.state.todos)
      localStorage.setItem("todos", temp)
    }            
  }

  handleChange = id => {
    this.setState(prevState => ({    
      todos: prevState.todos.map((todo) => {     
        if (todo.id === id) {  
          return {
            ...todo, completed: !todo.completed
          }      
        }      
        return todo;    
      })  
    }));    
  };

  delTodo = id => {
    this.setState({    
      todos: [      
        ...this.state.todos.filter(todo => {        
          return todo.id !== id;      
        })    
      ]  
    });
  };

  addTodoItem = title => {
    const newTodo = {    
      id: uuidv4(),    
      title: title,    
      completed: false  
    };  
    this.setState({    
      todos: [...this.state.todos, newTodo]  
    });
  };

  
  setUpdate = (updatedTitle, id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if(todo.id === id) {
          todo.title = updatedTitle
        }
        return todo
      })
    })
  }

  render() {
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodoProps={this.addTodoItem} />
          <TodosList 
            todos={this.state.todos} 
            handleChangeProps={this.handleChange} 
            deleteTodoProps={this.delTodo}
            setUpdate ={this.setUpdate} 
          />
        </div>
      </div>
    );
  }
}
export default TodoContainer