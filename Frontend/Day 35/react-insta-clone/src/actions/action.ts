export interface User {
  username: string;
  profilePicture: string;
}

const updateUser = (user: User) => {
  return (dispatch: any) => {
    fetch("/data/user.json")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "UPDATE_USER", payload: data });
      });
  };
};

export default updateUser;
