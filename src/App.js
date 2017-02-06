import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {ToDoForm, ToDoList} from './components/todo'
class App extends Component {
    constructor(){
        super();
        this.state={
            todos:[
                {id:1, name:'Lern JSX',isComplete:true},
                {id:2, name:'Make awsome app', isComplete:false},
                {id:3, name:'ship it!', isComplete:false}
            ],
            currentToDo:''
        }
        this.handleInputChange =this.handleInputChange.bind(this)
    }
    handleInputChange(evt){
        this.setState({currentToDo: evt.target.value})

    }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React ToDo's</h2>
        </div>
        <div className="ToDo-App">
            <ToDoForm handleInputChange={this.handleInputChange}
                      currentToDo={this.state.currentToDo}/>
            <ToDoList todos={this.state.todos}/>

        </div>
      </div>
    );
  }
}

export default App;
