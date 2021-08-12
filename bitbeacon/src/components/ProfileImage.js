"use es6";

import defaultProfileImage from "../images/default-profile-image.png";

const ProfileImage = ({ source, alt, width, height }) => {
  const style = {
    width: `${width}%`,
    height: `${height}%`,
    borderRadius: "25px",
  };

  return (
    <>
      <br />
      <img
        src={source || defaultProfileImage}
        style={style}
        alt="Profile Image"
      />
      <br />
    </>
  );
};

export default ProfileImage;
