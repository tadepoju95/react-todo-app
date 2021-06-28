import { combineReducers } from 'redux';
import todosReducer from './todosReducer';
import authReducer from './authReducer';
import todoReducer from './todoReducer'


export default combineReducers({
	todos: todosReducer,
	auth: authReducer,
	allTodos: todoReducer
});