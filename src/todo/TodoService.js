const TODO_KEY = 'todos';

const getTodos = () => {
  const todos = localStorage.getItem(TODO_KEY);
  return todos ? JSON.parse(todos) : [];
};

const store = (todos) => localStorage.setItem(TODO_KEY, JSON.stringify(todos));

const addTodo = (todo) => {
  const todos = getTodos();
  todos.push(todo);
  store(todos);
  return getTodos();
};

const removeTodo = (todo) => {
  const todos = getTodos().filter((td) => td !== todo);
  store(todos);
  return getTodos();
};

export const TodoService = {
  getTodos,
  addTodo,
  removeTodo
};
