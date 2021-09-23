import { User } from "../actions/action"

const initialState = {
    username: "",
    profilePicture: ""
}

export interface actionType {
    type: "UPDATE_USER",
    payload: string
}

const userReducer = (state:User = initialState,action:actionType) => {
    switch(action.type) {
        case "UPDATE_USER":
            return action.payload;
        default:
            return state;
    }
};

export default userReducer;