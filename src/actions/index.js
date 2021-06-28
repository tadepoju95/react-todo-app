import todosApi from '../apis/todosApi';
import todoList from '../apis/todoList';


export const signIn = userId => {
  return {
    type: 'SIGN_IN',
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: 'SIGN_OUT'
  };
};


export const fetchTodos = () => async dispatch => {
	const response = await todosApi.get('/todos?_limit=5');

	dispatch({ type: 'FETCH_TODOS', payload: response.data });
};

export const createTodo = inputValue => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await todoList.post('/todoList', { ...inputValue, userId });

  dispatch({ type: 'CREATE_TODO', payload: response.data });
};

export const fetchAllTodos = () => async dispatch => {
  const response = await todoList.get('/todoList');

  dispatch({ type: 'FETCH_ALL_TODOS', payload: response.data });
};

export const fetchTodo = id => async dispatch => {
  const response = await todoList.get(`/todoList/${id}`);

  dispatch({ type: 'FETCH_TODO', payload: response.data });
};

export const editTodo = (id, inputValue) => async dispatch => {
  const response = await todoList.patch(`/todoList/${id}`, inputValue);

  dispatch({ type: 'EDIT_TODO', payload: response.data });
};

export const deleteTodo = id => async dispatch => {
  await todoList.delete(`/todoList/${id}`);

  dispatch({ type: 'DELETE_TODO', payload: id });
};