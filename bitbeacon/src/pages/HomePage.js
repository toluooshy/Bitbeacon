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

const HomePage = () => {
  const items = [
    {
      name: "iPhone XR",
      id: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-xr-red-select-201809?wid=940&hei=1112&fmt=p-jpg&qlt=95&.v=1551226038669.jpeg",
      lostStatus: false,
    },
    {
      name: "Hydroflask",
      id: "https://cdn.shoplightspeed.com/shops/618368/files/19158415/image.jpg",
      lostStatus: true,
    },
    {
      name: "Frisbee",
      id: "https://www.discstore.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/t/star_white_front_r2.jpg",
      lostStatus: false,
    },
    {
      name: "Macbook Pro",
      id: "https://www.zdnet.com/a/hub/i/r/2020/11/16/37e33024-2892-4bb7-9d21-6ac6f7544def/resize/1200x900/df40c8ba0096e1a62c5879c1d42d069f/apple-macbook-pro-m1-2020-5.jpg",
      lostStatus: false,
    },
    {
      name: "iPad Air",
      id: "https://m.media-amazon.com/images/I/719UcXKzXHL._AC_SL1500_.jpg",
      lostStatus: true,
    },
    {
      name: "Satchel",
      id: "https://cdn11.bigcommerce.com/s-uiywfsyvbe/products/376/images/3914/leather-satchel-for-man-bag-edc-indiana-jones-quality-toba-brownleather-satchel-for-man-bag-edc-indiana-jones-quality-tan-brown-front-side__27414.1603855093.1280.1280.jpg?c=1.jpg",
      lostStatus: false,
    },
  ];

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
        <div style={{ flex: "1" }}>
          <UnstyledLink url={"profile"}>
            <SelectableButton height={350}>
              <UnderlinedText>Profile</UnderlinedText>
              <ProfileImage height={40} />
              <HighlightedText>
                <h1>Your Name</h1>
              </HighlightedText>
              <h5>Badges:</h5>
              <h2>A, B, C</h2>
              <h5>Tokens:</h5>
              <HighlightedText>
                <h2>1500 BNT</h2>
              </HighlightedText>
            </SelectableButton>
          </UnstyledLink>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flex: "1",
          }}
        >
          <div style={{ flex: "1" }}>
            <UnstyledLink url={"items"}>
              <SelectableButton height={366}>
                <UnderlinedText>Items</UnderlinedText>
                <ItemsPreview
                  width={(0.9 * window.innerWidth) / 2 - 50}
                  items={items}
                />
              </SelectableButton>
            </UnstyledLink>
          </div>
          <div
            style={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div>
              <UnstyledLink url={"map"}>
                <SelectableButton height={200}>
                  <UnderlinedText>Map</UnderlinedText>
                  <Map height={67.5} />
                </SelectableButton>
              </UnstyledLink>
            </div>
            <div>
              <UnstyledLink url={"settings"}>
                <SelectableButton height={150}>
                  <UnderlinedText>Settings</UnderlinedText>
                  <UIImage
                    source={
                      "https://cdn4.iconfinder.com/data/icons/forgen-phone-settings/48/setting-512.png"
                    }
                    alt="Settings Icon"
                    width={100}
                    height={100}
                  />
                </SelectableButton>
              </UnstyledLink>
            </div>
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default HomePage;
