import React from "react";
import classes from "./Topic.module.css";
import TopicList from "./TopicList/TopicList";

const Topic = () => {
    return(
        <div className={classes.topic}>
            <div className={classes.header}>
                <h3 className={classes.header__heading}>
                    Sheet Name                
                </h3>
                <button className={classes.header__button}>
                    + Create task
                </button>
            </div>
            <div className={classes.list}>
                <TopicList/>    
            </div>
        </div>
    )
}

export default Topic;