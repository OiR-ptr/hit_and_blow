import React from "react";
import {
  Container,
  Box,
  Grid,
  Typography,
  Avatar,
  makeStyles,
} from "@material-ui/core";
import NumberDial from "./parts/NumberDial";
import Number0 from "../_images/number_0.png";
import Number1 from "../_images/number_1.png";
import Number2 from "../_images/number_2.png";
import Number3 from "../_images/number_3.png";
import Number4 from "../_images/number_4.png";
import Number5 from "../_images/number_5.png";
import Number6 from "../_images/number_6.png";
import Number7 from "../_images/number_7.png";
import Number8 from "../_images/number_8.png";
import Number9 from "../_images/number_9.png";

const classes = makeStyles({
  root: {
    width: 48,
    height: 48,
  },
});

const PlayMat = (props) => {
  const { selectedNumber, dial, setNumber } = props;
  const [dialSrc, setDialSrc] = React.useState([]);

  React.useEffect(() => {
    setDialSrc([
      Number0,
      Number1,
      Number2,
      Number3,
      Number4,
      Number5,
      Number6,
      Number7,
      Number8,
      Number9,
    ]);
  }, []);

  return (
    <Container maxWidth="sm" style={{ backgroundColor: "yellow" }}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Box
            flex="wrap"
            justifyContent="center"
            alignItems="center"
            style={{ backgroundColor: "red" }}
          >
            <Typography align="center">Selected</Typography>
            <center>
              <Avatar
                alt="selected"
                src={dialSrc[selectedNumber]}
                className={classes.root}
              ></Avatar>
            </center>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <Container maxWidth="sm" style={{ backgroundColor: "purple" }}>
            <Box display="flex" justifyContent="center">
              <NumberDial
                dial={dial}
                onSetNumber={(position) => setNumber(selectedNumber, position)}
              />
            </Box>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PlayMat;
