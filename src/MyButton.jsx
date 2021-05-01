import React from "react";

const MyButtom = () => {
  const butt = {
    marginLeft: "80px",
    marginTop: "50px",
    height: "28px",
    width: "30px",
    marginLeft: "110px",
    marginBottom: "40px",
    borderRadius: "22px",
    backgroundColor: "red"
  };

  return (
    <>
      <button style={butt}>
        <span
          style={{
            fontSize: "22px",
            backgroundColor: "yellow",
            borderRadius: "10px"
          }}
        >
          X
        </span>
      </button>
    </>
  );
};

export default MyButtom;
