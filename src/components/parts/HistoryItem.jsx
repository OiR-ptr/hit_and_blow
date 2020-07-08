import React, { useEffect } from "react";
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

  useEffect(() => {
    console.log(dial);
  }, [dial]);

  return (
    <ListItem>
      {dial.numbers.map((_, idx) => {
        return (
          <ListItemAvatar key={`numava_${idx}`}>
            <Avatar alt="alt" />
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
