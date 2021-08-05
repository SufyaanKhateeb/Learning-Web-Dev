const addItem = (item) => {
  return {
    type: "ADD_ITEM",
    payload: item,
  };
};

const removeItem = (id) => {
  return {
    type: "REMOVE_ITEM",
    payload: id,
  };
};

const checkItem = (id) => {
  return {
    type: "CHECK_ITEM",
    payload: id,
  };
};

const loadTodos = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        return dispatch({
          type: "LOAD_TODOS",
          payload: json
        });
      });
  };
};

export { addItem, removeItem, checkItem, loadTodos };
