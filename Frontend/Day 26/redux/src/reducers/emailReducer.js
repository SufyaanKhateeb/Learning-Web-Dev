const emailReducer = (state = "", action) => {
  if (action.type === "changeEmail") {
    console.log("email");
    return action.e.target.value;
  }
  return state;
};

export default emailReducer;
