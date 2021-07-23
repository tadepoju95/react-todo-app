import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap'
import{ editTodo, deleteTodo } from '../actions';


class ListItem extends React.Component {
	state = { value: this.props.todoItem, removeReadOnly: true };

	handleChange = e => {
    	this.setState({value: e.target.value});
  	}

  	handleReadOnly() {
  		this.setState({removeReadOnly: !this.state.removeReadOnly});
  	}

  	handleUpdatedTodo = inputValue => {
  		if(this.props.todoItem !== this.state.value) {
    		this.props.editTodo(this.props.id, this.state.value);
    	}
 	};

 	handleDeletedTodo = id => {
 		this.props.deleteTodo(this.props.id);
 	}
  	
	renderList () {
			return (
				<Container>
					<div className="input-group mb-3 list">
  						<input type="text" className="form-control" value={this.state.value} onChange={this.handleChange} aria-label="Recipient's username" aria-describedby="button-addon2" readOnly={this.state.removeReadOnly} />
  						<div className="input-group-append">
    						<button className="btn btn-outline-secondary" type="button" id="button-addon2"  onClick={() => this.handleReadOnly()}>Edit</button>
    						<button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => {this.handleUpdatedTodo(); this.handleReadOnly()}}>Update</button>
    						<button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => this.handleDeletedTodo()}>Delete</button>
 						</div>
					</div>
				</Container>
			);
	}


	render() {
		return (
			<div>
				<div>{this.renderList()}</div>
			</div>
		)
	}
}


export default connect(null, { editTodo, deleteTodo })(ListItem);



