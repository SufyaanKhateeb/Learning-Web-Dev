const changeName = (e) => {
  return {
    type: "changeName",
    e: e
  };
};

const changeEmail = (e) => {
  return {
    type: "changeEmail",
    e: e
  };
};

export { changeName, changeEmail };
