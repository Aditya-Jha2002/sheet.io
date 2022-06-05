import React from "react";
import classes from "./TopicCard.module.css";

const TopicCard = (props) => {
    return(
        <div className={`${classes.card} ${classes.className}`}>
            {props.children}
        </div>
    );
}

export default TopicCard;