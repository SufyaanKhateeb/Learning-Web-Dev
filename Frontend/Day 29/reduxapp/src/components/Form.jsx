import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updatePlace, updatePlaceData} from "../actions/index";

const Form = () => {
  const place = useSelector(state => state.place);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="row">
        <div className="form col-12">
          <input
            type="text"
            value={place}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                dispatch(updatePlaceData(place));
              }
            }}
            onChange={(e) => {
              dispatch(updatePlace(e.target.value));
            }}
          />
          <button
            className="btn btn-primary"
            onClick={() => dispatch(updatePlaceData(place))}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
