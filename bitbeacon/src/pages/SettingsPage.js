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

const SettingsPage = () => {
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
          <SelectableButton height={125}>
            <UnderlinedText>Notifications</UnderlinedText>
          </SelectableButton>
        </div>
        <div>
          <SelectableButton height={125}>
            <UnderlinedText>Security</UnderlinedText>
          </SelectableButton>
        </div>
        <div>
          <SelectableButton height={125}>
            <UnderlinedText>Theme</UnderlinedText>
          </SelectableButton>
        </div>
        <div>
          <SelectableButton height={125}>
            <UnderlinedText>Languages</UnderlinedText>
          </SelectableButton>
        </div>
        <div>
          <SelectableButton height={125}>
            <UnderlinedText>Local Resources</UnderlinedText>
          </SelectableButton>
        </div>
      </div>
      <br />
    </>
  );
};

export default SettingsPage;
