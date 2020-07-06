import React from "react";
import { Container, Box } from "@material-ui/core";
import NumberDial from "./parts/NumberDial";

const PlayMat = (props) => {
  const { selectedNumber, dial, setNumber } = props;

  return (
    <Container maxWidth="sm" style={{ backgroundColor: "yellow" }}>
      <Box display="flex" justifyContent="center" m={2}>
        <NumberDial
          dial={dial}
          dialLength={dial.length}
          onSetNumber={(position) => setNumber(selectedNumber, position)}
        />
      </Box>
    </Container>
  );
};

export default PlayMat;
