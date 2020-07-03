import React from "react";
import { Container, Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    height: 48,
    width: 48,
  },
});

const PlayMat = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" style={{ backgroundColor: "yellow" }}>
      <Box display="flex" justifyContent="center">
        <Box border={1} className={classes.root}></Box>
        <Box border={1} className={classes.root}></Box>
        <Box border={1} className={classes.root}></Box>
        <Box border={1} className={classes.root}></Box>
      </Box>
    </Container>
  );
};

export default PlayMat;
