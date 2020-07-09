import React, { useEffect, useState } from "react";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@material-ui/core";
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

const HistoryListItem = (props) => {
  const { dial } = props;
  const [dialSrc, setDialSrc] = useState([]);

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
  }, []);

  return (
    <ListItem>
      {dial.numbers.map((val, idx) => {
        return (
          <ListItemAvatar key={`numava_${idx}`}>
            <Avatar alt="alt" src={dialSrc[val]} />
          </ListItemAvatar>
        );
      })}
      <ListItemText
        primary={`${dial.hit} Hit, ${dial.blow} Blow`}
      ></ListItemText>
    </ListItem>
  );
};

export default HistoryListItem;
