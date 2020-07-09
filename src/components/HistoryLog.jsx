import React from "react";
import { Container, Box, Grid, List } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import HistoryListItem from "./parts/HistoryItem";

const HistoryLog = (props) => {
  const { histories } = props;

  return (
    <Box m={3}>
      <Container maxWidth="sm" style={{ backgroundColor: "purple" }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box m={1} style={{ backgroundColor: "aliceblue" }}>
              <List>
                {histories.map((history) => {
                  return <HistoryListItem key={history.key} dial={history} />;
                })}
              </List>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

const useStateProps = () => {
  const histories = useSelector((state) => state.game.history);
  // console.log(histories);
  return {
    histories,
  };
};

const useDispatchProps = () => {
  const dispatch = useDispatch();
  return {};
};

const HistoryLogContainer = (props) => {
  const _props = { ...useStateProps(), ...useDispatchProps(), ...props };
  return <HistoryLog {..._props} />;
};

export default HistoryLogContainer;
