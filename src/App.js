    import React, { Component} from 'react';
    import './App.css';

    class App extends Component {
      constructor(props) {
      super(props);
      this.state = {
        inputValue: '',
        todoitm: ['Todo 01', 'Todo 02', 'Todo 03']
      };
    }

    onClick = () => {
      const { inputValue, todoitm } = this.state;
      if (inputValue) {
        const nextState = [...todoitm, inputValue];
        this.setState({ todoitm: nextState, inputValue: '' });
      }
    }

    handleCheck = () =>  {
    this.setState({checked: !this.state.checked});
    
  }

    onRemoveItem = i => {
    this.setState(state => {
      const todoitm = state.todoitm.filter((item, j) => i !== j);
      return {
        todoitm,
      };
    });
    };

    onChange = (e) => this.setState({ inputValue: e.target.value });

      render() {
        const { todoitm, inputValue } = this.state;
        return (
          <div className="App">
          <h2>Todo</h2>
          <input type="text" value={inputValue} onChange={this.onChange} placeholder="Add your Todo"/>
          <button onClick={this.onClick}>Add</button>
          <ul>
          {this.state.todoitm.map((todoitm, index) => (
            <li key={todoitm}>{todoitm}<span className='remove' onClick={() => this.onRemoveItem(index)}>X</span> <input className='chektodo' onChange={this.handleCheck} type="checkbox"/></li>
          ))}
          </ul>
          <todoitm/>
          </div>
        );
      }
    }

    export default App;
