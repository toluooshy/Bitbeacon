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
import UIButton from "../components/UIButton";

const ProfilePage = () => {
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
          <SelectableButton height={300}>
            <UnderlinedText>Profile Info</UnderlinedText>
            <h3>
              <HighlightedText>Master Key: </HighlightedText>
              <p>hx01234567890987654321</p>
            </h3>
            <h3>
              <HighlightedText>Social Media: </HighlightedText>
              <p>Facebook, Instagram, Twitter</p>
            </h3>
          </SelectableButton>
        </div>
        <div>
          <SelectableButton height={200}>
            <UnderlinedText>Badges</UnderlinedText>
            <UIButton label={"Import Badges"} />
            <UIButton label={"Export Badges"} />
          </SelectableButton>
        </div>
        <div>
          <SelectableButton height={200}>
            <UnderlinedText>Tokens</UnderlinedText>
            <UIButton label={"Import Tokens"} />
            <UIButton label={"Export Tokens"} />
          </SelectableButton>
        </div>
      </div>
      <br />
    </>
  );
};

export default ProfilePage;
