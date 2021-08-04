import React from 'react';
import { connect } from 'react-redux';
import{ fetchAllTodos } from '../actions';
import { Container } from 'react-bootstrap'
import ListItem from './ListItem';


class ListOfTodos extends React.Component {
	
	componentDidMount() {
		this.props.fetchAllTodos();
	}
  	
	renderList () {
		if (this.props.isSignedIn) {
		return this.props.allTodos.filter((eachTodo) => {
			return this.props.userId === eachTodo.userId 
		}).map((eachTodo, index) => {
			return (
				<ListItem key={eachTodo.id} todoItem={eachTodo.inputValue} index={index} id={eachTodo.id} />
			);
		});
	}
}

	render() {
		console.log(this.props.allTodos);
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
		isSignedIn: state.auth.isSignedIn,
		userId: state.auth.userId
	 };
}


export default connect(mapStateToProps, { fetchAllTodos })(ListOfTodos);