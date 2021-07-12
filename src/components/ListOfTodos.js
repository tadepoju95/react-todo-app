import React from 'react';
import { connect } from 'react-redux';
import{ fetchAllTodos, editTodo } from '../actions';
import { Container } from 'react-bootstrap'


class ListOfTodos extends React.Component {
	state = { value: "", removeReadOnly: true };

	componentDidMount() {
		this.props.fetchAllTodos();
	}

	handleChange = e => {
    	this.setState({value: e.target.value});
  	}

  	handleReadOnly() {
  		this.setState({removeReadOnly: !this.state.removeReadOnly});
  	}
  	
	renderList () {
		if (this.props.isSignedIn) {
		return this.props.allTodos.map((eachTodo) => {
			return (
				<Container key={eachTodo.id}>
					<div className="input-group mb-3 list">
  						<input type="text" className="form-control" value={eachTodo.inputValue} onChange={this.handleChange} aria-label="Recipient's username" aria-describedby="button-addon2" readOnly={this.state.removeReadOnly} />
  						<div className="input-group-append">
    						<button className="btn btn-outline-secondary" type="button" id="button-addon2"  onClick={() => this.handleReadOnly()}>Edit</button>
    						<button className="btn btn-outline-secondary" type="button" id="button-addon2">Update</button>
    						<button className="btn btn-outline-secondary" type="button" id="button-addon2">Delete</button>
 						</div>
					</div>
				</Container>
			);
		});
	}
	}

	render() {
		return (
			<div>
				<div>{this.renderList()}</div>
			</div>
		)
	}
}


const mapStateToProps = state => {
	return { 
		allTodos: Object.values(state.allTodos),
		isSignedIn: state.auth.isSignedIn
	 };
}


export default connect(mapStateToProps, { fetchAllTodos, editTodo })(ListOfTodos);