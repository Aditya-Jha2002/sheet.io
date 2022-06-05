import React from "react";
import classes from "./Topbar.module.css";
import avatar from "../../assets/avatar.png";
import point from "../../assets/point-coin.png";
import downArrow from "../../assets/arrow-down.png";
import calendar from "../../assets/calendar.png";
import sheet from "../../assets/sheet.png";
import topic from "../../assets/topic.svg";

const Topbar = () => {
  return (
    <>
      <nav className={classes.topbar}>
        <h1>Sheet.io</h1>
        <div className={classes.nav}>
          <div className={classes["nav-item"]}>
            <img src={topic} alt="Topic" />
            <p>Topics</p>
          </div>
          <div className={`${classes["nav-item"]} ${classes["dropdown"]}`}>
            <img src={sheet} alt="Sheet" />
            <p>Sheets</p>
          </div>
          <div className={classes["nav-item"]}>
            <img src={calendar} alt="Calendar" />
            <p>Calendar</p>
          </div>
        </div>
        <div className={classes.info}>
          <div className={classes["info__point"]}>
            <img src={point} alt="Avatar" className={classes.point} />
            <p>200</p>
          </div>
          <div className={classes["info__profile"]}>
            <img src={avatar} alt="Avatar" className={classes.avatar} />
            <img src={downArrow} alt="Avatar" className={classes.dropdown} />
          </div>
        </div>
      </nav>
      <hr />
    </>
  );
};

export default Topbar;
