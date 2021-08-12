"use es6";

const Container = ({ children, width, height }) => {
  const style = {
    color: `#595959`,
    backgroundColor: `#ffffff`,
    width: width,
    height: height,
    margin: `auto`,
    padding: `auto`,
    borderRadius: `25px`,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch",
    flexDirection: "column",
  };

  return <div style={style}>{children}</div>;
};

export default Container;
