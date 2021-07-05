import React from 'react';
import { connect } from 'react-redux';
import{ fetchAllTodos } from '../actions';
import { Container } from 'react-bootstrap'


class ListOfTodos extends React.Component {

	componentDidMount() {
		this.props.fetchAllTodos();
	}

	renderList () {
		if (this.props.isSignedIn) {
		return this.props.allTodos.map((eachTodo) => {
			return (
				<Container key={eachTodo.id}>
					<div className="input-group mb-3 list">
  						<input type="text" className="form-control" value={eachTodo.inputValue} aria-label="Recipient's username" aria-describedby="button-addon2" />
  						<div className="input-group-append">
    						<button className="btn btn-outline-secondary" type="button" id="button-addon2">Edit</button>
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


export default connect(mapStateToProps, { fetchAllTodos })(ListOfTodos);