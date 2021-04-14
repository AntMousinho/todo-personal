import React, { Component } from 'react';

class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			checked: false,
			textDecoration: ''
		}
	}

	handleClick = () => {
		if(this.state.checked) {
			this.setState({checked: false, textDecoration: ''})
		} else {
			this.setState({checked: true, textDecoration: 'line-through'})
		}
	}

	render() {
		return (
		<div key={this.props.index}>
			<input id={`todo-${this.props.index}-check`} type="checkbox" onClick={this.handleClick}/>
			<span id={`todo-${this.props.index}-text`} style={{textDecoration: this.state.textDecoration}} >{this.props.text}</span>
		</div>	
		)
	}
}

export default Todo;