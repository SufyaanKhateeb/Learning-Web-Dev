interface actionType {
    type:string
}

const themeChange = (state:boolean = false, action:actionType) => {
    switch(action.type) {
        case "THEME_CHANGE":
            return !state;
        default:
            return state;
    }
}

export default themeChange;