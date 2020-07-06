import React from "react";
import { Container, Avatar, Box, IconButton } from "@material-ui/core";
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

const NumberInventory = (props) => {
  const { selectNumber } = props;

  return (
    <Container maxWidth="sm" style={{ backgroundColor: "#cfe8fc" }}>
      <div>NumberInventory!</div>
      <Box display="flex" flexWrap="wrap" m={2}>
        <IconButton aria-label="number-0" onClick={() => selectNumber(0)}>
          <Avatar alt="0_Number" src={Number0} />
        </IconButton>

        <IconButton aria-label="number-1" onClick={() => selectNumber(1)}>
          <Avatar alt="1_Number" src={Number1} />
        </IconButton>

        <IconButton aria-label="number-2" onClick={() => selectNumber(2)}>
          <Avatar alt="2_Number" src={Number2} />
        </IconButton>

        <IconButton aria-label="number-3" onClick={() => selectNumber(3)}>
          <Avatar alt="3_Number" src={Number3} />
        </IconButton>

        <IconButton aria-label="number-4" onClick={() => selectNumber(4)}>
          <Avatar alt="4_Number" src={Number4} />
        </IconButton>

        <IconButton aria-label="number-5" onClick={() => selectNumber(5)}>
          <Avatar alt="5_Number" src={Number5} />
        </IconButton>

        <IconButton aria-label="number-6" onClick={() => selectNumber(6)}>
          <Avatar alt="6_Number" src={Number6} />
        </IconButton>

        <IconButton aria-label="number-7" onClick={() => selectNumber(7)}>
          <Avatar alt="7_Number" src={Number7} />
        </IconButton>

        <IconButton aria-label="number-8" onClick={() => selectNumber(8)}>
          <Avatar alt="8_Number" src={Number8} />
        </IconButton>

        <IconButton aria-label="number-9" onClick={() => selectNumber(9)}>
          <Avatar alt="9_Number" src={Number9} />
        </IconButton>
      </Box>
    </Container>
  );
};

export default NumberInventory;
