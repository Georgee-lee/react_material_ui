import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  main: {
    backgroundColor: "purple",
    border: "3px solid teal",
    "& h1": {
      color: "white"
    }
  },
  secondary: {
    backgroundColor: "blue"
  }
};

const MiniPalette = props => {
  const { classes } = props;

  return (
    <div className={classes.main}>
      <h1>Mini</h1>
      <section className={classes.secondary} />
    </div>
  );
};

// HOC 사용
export default withStyles(styles)(MiniPalette);
