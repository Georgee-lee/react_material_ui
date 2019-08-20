import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    "&:hover": {
      cursor: "pointer"
    }
  },
  colors: {
    backgroundColor: "gray"
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0",
    color: "black",
    paddingTop: "0.5rem",
    fontSize: "1rem",
    position: "relative"
  },
  emoji: {
    marginLeft: "auto",
    fontSize: "1rem"
  }
};

const MiniPalette = props => {
  const { classes, paletteName, emoji } = props;

  return (
    <div className={classes.root}>
      <div className={classes.colors} />
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
};

// HOC 사용
export default withStyles(styles)(MiniPalette);
