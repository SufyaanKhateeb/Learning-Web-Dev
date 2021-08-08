const updatePlace = (place) => {
  return {
    type: "UPDATE_PLACE",
    payload: place,
  };
};

const updatePlaceData = (place) => {
  return (dispatch) => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=f398c8712d29443f95e200034210508&q=${place}`
    )
      .then((response) => response.json())
      .then((data) => {
        return dispatch({
          type: "UPDATE_PLACE_DATA",
          payload: data,
        });
      });
  };
};

const toggleTheme = () => {
  return {
    type: "TOGGLE_THEME",
    payload: "dark",
  };
}

export { updatePlace, updatePlaceData, toggleTheme };
