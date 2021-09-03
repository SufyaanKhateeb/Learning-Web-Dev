const addTodo = (text: string) => {
  return {
    type: "ADD_TODO",
    payload: text,
  };
};

const deleteTodo = (index: number) => {
  return {
    type: "DELETE_TODO",
    payload: index,
  };
};

const doneTodo = (index: number) => {
  return {
    type: "DONE_TODO",
    payload: index,
  };
};

const themeChange = () => {
  return {
    type: "THEME_CHANGE",
  };
};

export { addTodo, deleteTodo, doneTodo, themeChange };
