import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
        this.hendleInputChange =this.hendleInputChange.bind(this)
    }
    hendleInputChange(evt){
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
            <form action="">
                <input type="text" onChange={this.hendleInputChange} value={this.state.currentToDo}/>
            </form>
            <div className="ToDo-List">
                <ul>
                    {this.state.todos.map(todo =>
                        <li key={todo.id}>
                            <input type="checkbox" defaultChecked={todo.isComplete}/>{todo.name}
                        </li>
                    )}

                </ul>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
