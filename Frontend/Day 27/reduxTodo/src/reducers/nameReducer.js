const nameReducer = (state = "", action) => {
  if (action.type === "changeName") {
    console.log("name");
    return action.e.target.value;
  }
  return state;
};

export default nameReducer;
