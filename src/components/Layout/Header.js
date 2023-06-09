import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import fastFoodBanner from "../../assets/fastFoodBanner.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Navaak</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={fastFoodBanner} alt="fastFoodBanner" />
      </div>
    </Fragment>
  );
};

export default Header;
