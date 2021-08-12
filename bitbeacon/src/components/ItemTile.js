"use es6";

import HighlightedText from "./HighlightedText";
import UIImage from "./UIImage";

const ItemTile = ({ children, width, name, id, lostStatus }) => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ padding: "10px" }}>
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <UIImage source={id} alt={id} width={40} height={40} />

            <h4>
              <HighlightedText>
                {name.length < width ? name : name.slice(0, width)}
              </HighlightedText>
            </h4>
          </div>
        </div>
        <div style={{ padding: "10px" }}>
          {lostStatus ? <h6>LOST</h6> : <h6>NOT LOST</h6>}
        </div>
      </div>
    </>
  );
};

export default ItemTile;
