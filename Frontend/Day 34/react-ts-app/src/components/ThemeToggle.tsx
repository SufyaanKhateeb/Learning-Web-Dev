import { themeChange } from "../actions/action";
import { useSelector, useDispatch } from "react-redux";

const ThemeToggle = () => {
  const theme: boolean = useSelector((state: any) => state.theme);
  const dispatch = useDispatch();
  return (
    <button
      className={theme ? "theme-toggle dark" : "theme-toggle"}
      onClick={() => {
        dispatch(themeChange());
      }}
    >
      {theme ? "Light" : "Dark"}
    </button>
  );
};

export default ThemeToggle;
