"use es6";

import { Link } from "react-router-dom";
import ItemTile from "./ItemTile";

const ItemsPreview = ({ width, items }) => {
  return items.slice(0, 4).map(({ name, id, lostStatus }) => {
    return (
      <>
        <ItemTile width={width} name={name} id={id} lostStatus={lostStatus} />
      </>
    );
  });
};

export default ItemsPreview;
