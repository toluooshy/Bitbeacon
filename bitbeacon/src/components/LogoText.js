"use es6";

const LogoText = ({ children, width, height }) => {
  const style = {
    color: "#ffffff",
  };

  return <h2 style={style}>{children}</h2>;
};

export default LogoText;
