interface addTodo {
  type: "ADD_TODO";
  payload: string;
}

interface deleteTodo {
  type: "DELETE_TODO";
  payload: number;
}

interface doneTodo {
  type: "DONE_TODO";
  payload: number;
}

type actionType = addTodo | deleteTodo | doneTodo;

interface objtype {
    title:string,
    done:boolean
}

const todosReducer = (state:objtype[] = [], action: actionType) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { title: action.payload, done: false }];
    case "DELETE_TODO":
      return state.filter((el: any) => el !== state[action.payload]);
    case "DONE_TODO":
      state[action.payload].done = !state[action.payload].done;
      return [...state];
    default:
      return state;
  }
};


export default todosReducer;