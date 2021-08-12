"use es6";

const HighlightedText = ({ children }) => {
  const style = {
    color: "#4c1130",
  };

  return (
    <>
      <div style={style}>{children}</div>
    </>
  );
};

export default HighlightedText;
