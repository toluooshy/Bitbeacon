"use es6";

const UIButton = ({ label }) => {
  const style = {
    width: "100px",
    height: "60px",
    borderRadius: "25px",
  };

  return (
    <>
      <br />
      <button>{label}</button>
      <br />
    </>
  );
};

export default UIButton;
