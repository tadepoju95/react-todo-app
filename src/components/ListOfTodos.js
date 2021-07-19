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
		return this.props.allTodos.map((eachTodo, index) => {
			return (
				<ListItem key={index} todoItem={eachTodo.inputValue} index={index} id={eachTodo.id} />
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
		isSignedIn: state.auth.isSignedIn
	 };
}


export default connect(mapStateToProps, { fetchAllTodos })(ListOfTodos);