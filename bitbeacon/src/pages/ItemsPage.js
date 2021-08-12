import React from "react";
import { useState } from "react";
import ProfileImage from "../components/ProfileImage";
import SelectableButton from "../components/SelectableButton";
import UnderlinedText from "../components/UnderlinedText";
import UnstyledLink from "../components/UnstyledLink";
import HighlightedText from "../components/HighlightedText";
import UIImage from "../components/UIImage";
import Map from "../components/Map";
import ItemsPreview from "../components/ItemsPreview";

const ItemsPage = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "90%",
          height: "80%",
          margin: "auto",
        }}
      >
        <div>
          <SelectableButton height={200}>
            <UnderlinedText>Buy Tags</UnderlinedText>
          </SelectableButton>
        </div>
        {[1, 2, 3, 4, 5, 6].map((item, index) => {
          return (
            <SelectableButton key={index} height={125}>
              <UnderlinedText>Item {item}</UnderlinedText>
              <br />
              <br />
            </SelectableButton>
          );
        })}
      </div>
      <br />
    </>
  );
};

export default ItemsPage;
