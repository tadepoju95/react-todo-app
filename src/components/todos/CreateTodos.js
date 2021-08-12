import React from 'react';
import { connect } from 'react-redux';
import{ createTodo } from '../../actions';



class CreateTodos extends React.Component {
	state = {  inputValue: ""};

	onSubmit = e => {
		e.preventDefault();
		this.props.createTodo(this.state.inputValue)
		this.setState({ inputValue: ""}) 
	};

	
	renderForm () {
		return (
			<form onSubmit={this.onSubmit} > 
				<div className="input-group mb-3">
	  				<input type="text" className="form-control" placeholder="Add Todo" aria-label="Recipient's username" aria-describedby="button-addon2" value={this.state.inputValue} 
	         	    onChange={(e) => this.setState({ inputValue: e.target.value }, () => {console.log(this.state.inputValue)})} readOnly={!this.props.isSignedIn ? true : false} name="eachTodo" required />
	  				<div className="input-group-append">
	    				<button className="btn btn-outline-secondary" type="submit" id="button-addon2" disabled={!this.props.isSignedIn ? true : false} >Add</button>
	 				</div>
				</div>
			</form>
		)
	}


	render() {
		return (
			<div>
				<div>{this.renderForm()}</div>
			</div>
		)
	}
}


const mapStateToProps = state => {
	return { 
		isSignedIn: state.auth.isSignedIn
	 };
}


export default connect(mapStateToProps, {  createTodo })(CreateTodos);