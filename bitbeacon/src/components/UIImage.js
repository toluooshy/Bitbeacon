"use es6";

const UIImage = ({ source, alt, width, height }) => {
  const style = {
    width: `${width}px`,
    height: `${height}px`,
    borderRadius: "25px",
  };

  return (
    <>
      <br />
      <img src={source} style={style} alt={alt} />
      <br />
    </>
  );
};

export default UIImage;
