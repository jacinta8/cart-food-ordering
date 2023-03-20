import classes from "./Header.module.css";
import { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import HeaderButton from "./HeaderButton";
const Header = (props) => {
  return (
    <Fragment>
      <h1 className={classes.header}>
        ReactMeals
        <HeaderButton onClick={props.onShow} />
      </h1>

      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food" />
      </div>
    </Fragment>
  );
};
export default Header;
