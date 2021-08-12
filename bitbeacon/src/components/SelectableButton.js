"use es6";

const SelectableButton = ({ children, width, height }) => {
  var style = {
    color: "#595959",
    backgroundColor: "#ffffff",
    width: width,
    height: height,
    margin: "8px",
    padding: "auto",
    borderRadius: "25px",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch",
    flexDirection: "column",
  };

  const onMouseOver = (event) => {
    const el = event.target;
    el.style.border = "4px solid #4c1130";
  };

  const onMouseOut = (event) => {
    const el = event.target;
    el.style.border = "4px solid rgba(0,0,0,0)";
  };

  return (
    <>
      <div
        style={style}
        // onMouseEnter={(event) => onMouseOver(event)}
        // onMouseOut={(event) => onMouseOut(event)}
      >
        {children}
      </div>
    </>
  );
};

export default SelectableButton;
