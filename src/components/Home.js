import React from 'react';
import { connect } from 'react-redux';
import{ fetchTodos } from '../actions';
import { Container } from 'react-bootstrap'
import CreateTodos from './todos/CreateTodos';
import ListOfTodos from './todos/ListOfTodos';


class Home extends React.Component {

	componentDidMount() {
		this.props.fetchTodos();
	}

	renderList () {
		if (!this.props.isSignedIn) {
		return this.props.todos.map((todo) => {
			return (
				<Container key={todo.id}>
					<div className="input-group mb-3 list">
  						<input type="text" className="form-control" placeholder={todo.title} aria-label="Recipient's username" aria-describedby="button-addon2" readOnly={true} />
  						<div className="input-group-append">
    						<button className="btn btn-outline-secondary" type="button" id="button-addon2" disabled={true}>Edit</button>
    						<button className="btn btn-outline-secondary" type="button" id="button-addon2" disabled={true}>Update</button>
    						<button className="btn btn-outline-secondary" type="button" id="button-addon2" disabled={true}>Delete</button>
 						</div>
					</div>
				</Container>
			);
		});
	}
	}

	render() {
		console.log(this.props.todos);
		return (
			<div>
				<CreateTodos />
				<ListOfTodos />
				<div>{this.renderList()}</div>
			</div>
		)
	}
}


const mapStateToProps = state => {
	return { 
		todos: state.todos,
		isSignedIn: state.auth.isSignedIn
	 };
}


export default connect(mapStateToProps, { fetchTodos })(Home);