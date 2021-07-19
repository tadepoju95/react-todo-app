import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap'
import{ editTodo } from '../actions';


class ListItem extends React.Component {
	state = { value: this.props.todoItem, removeReadOnly: true };

	handleChange = e => {
    	this.setState({value: e.target.value});
  	}

  	handleReadOnly() {
  		this.setState({removeReadOnly: !this.state.removeReadOnly});
  	}

  	handleUpdatedTodo = inputValue => {
    	this.props.editTodo(this.props.id, this.state.value);
 	};
  	
	renderList () {
			return (
				<Container key={this.props.id}>
					<div className="input-group mb-3 list">
  						<input type="text" className="form-control" value={this.state.value} onChange={this.handleChange} aria-label="Recipient's username" aria-describedby="button-addon2" readOnly={this.state.removeReadOnly} />
  						<div className="input-group-append">
    						<button className="btn btn-outline-secondary" type="button" id="button-addon2"  onClick={() => this.handleReadOnly()}>Edit</button>
    						<button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => this.handleUpdatedTodo()}>Update</button>
    						<button className="btn btn-outline-secondary" type="button" id="button-addon2">Delete</button>
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


export default connect(null, { editTodo })(ListItem);



