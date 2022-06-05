import React from "react";
import TopicCard from "./TopicCard";
import Button from "../../../../Components/Button/Button";
// import CircularProgress from "@mui/material/CircularProgress";
import classes from "./TopicListItem.module.css";

const TopicListItem = () => {
  return (
    <TopicCard>
      {/* <CircularProgress variant="determinate" value={20/> */}
      <h1>TopicListItem</h1>
      <Button minWidth="25rem">Start now</Button>
    </TopicCard>
  );
};

export default TopicListItem;
