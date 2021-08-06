const todoReducer = (state = [], action) => {
  if (action.type === "ADD_ITEM") {
    console.log("adding item");
    return [...state, action.payload];
  } else if (action.type === "REMOVE_ITEM") {
    return state.filter((item, index) => index !== action.payload);
  } else if (action.type === "CHECK_ITEM") {
    state[action.payload].done = !state[action.payload].done;
    console.log(state);
    return [...state];
  } else if (action.type === "LOAD_TODOS") {
    return action.payload.slice(0,5);
  }
  return state;
};

export default todoReducer;
