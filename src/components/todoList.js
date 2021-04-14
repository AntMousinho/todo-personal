import React, { Component } from 'react';
import Todo from './todo.js'

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todoList: []
		}
		this.inputRef = React.createRef();
	}

	addToList = () => {
		let { todoList, todoInput } = this.state;
		this.setState({todoList: [...todoList, todoInput]});
		this.setState({todoInput: ''});
		this.inputRef.current.value = '';
	}

	saveInput = (e) => {
		this.setState({todoInput: e.target.value})
	}

	clearList = () => {
		this.setState({todoList: []});               
	}

	render() {
		return(
			<div>
				<input id="todo-input" type="text" onChange={this.saveInput} ref={this.inputRef} />
				<button id="save-todo" onClick={this.addToList} key="save-todo" >Save</button>
				<a href='#' id='todo-clear' onClick={this.clearList}>clear</a>
				{this.state.todoList.map((todo, index) => {
					return <Todo text={todo} index={index} key={`todo-${index}-key`}/>
				})}
			</div>
		)
	}
}

export default TodoList