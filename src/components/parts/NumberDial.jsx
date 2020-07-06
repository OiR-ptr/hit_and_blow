import React, { useEffect } from "react";
import { IconButton, Avatar, makeStyles } from "@material-ui/core";
import Number0 from "../../_images/number_0.png";
import Number1 from "../../_images/number_1.png";
import Number2 from "../../_images/number_2.png";
import Number3 from "../../_images/number_3.png";
import Number4 from "../../_images/number_4.png";
import Number5 from "../../_images/number_5.png";
import Number6 from "../../_images/number_6.png";
import Number7 from "../../_images/number_7.png";
import Number8 from "../../_images/number_8.png";
import Number9 from "../../_images/number_9.png";

const useStyles = makeStyles({
  iconBtn: {
    paddingLeft: 1,
    paddingRight: 1,
  },
  root: {
    height: 48,
    width: 48,
  },
});

const NumberDial = (props) => {
  const classes = useStyles();
  const { dial, dialLength, onSetNumber } = props;

  const [dialSrc, setDialSrc] = React.useState([]);

  useEffect(() => {
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
  }, [dialLength]);

  const NumeralPad = (props) => {
    const { number, dialSrc, onClickNumeral } = props;

    return (
      <IconButton
        aria-label="square"
        className={classes.iconBtn}
        onClick={() => onClickNumeral()}
      >
        <Avatar
          variant="square"
          className={classes.root}
          alt={number.toString()}
          src={dialSrc}
        ></Avatar>
      </IconButton>
    );
  };

  return (
    <>
      {dial.map((item, index) => {
        return (
          <NumeralPad
            key={index}
            number={item}
            dialSrc={dialSrc[item]}
            onClickNumeral={() => {
              onSetNumber(index);
            }}
          />
        );
      })}
    </>
  );
};

export default NumberDial;
