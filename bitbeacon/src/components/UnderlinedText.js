"use es6";

const UnderlinedText = ({ children }) => {
  const style = {
    color: "#000000",
  };

  return (
    <>
      <br />
      <br />
      <u style={style}>{children}</u>
      <br />
      <br />
    </>
  );
};

export default UnderlinedText;
