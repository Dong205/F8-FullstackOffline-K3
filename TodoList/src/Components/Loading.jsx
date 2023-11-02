import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Loading = () => {
  return (
    <div
      style={{
        position: "fixed",
        inset: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(20, 185, 166, 0.1)",
        zIndex: "10",
      }}
    >
      <ClipLoader color={"#29B074"} size={100} />
    </div>
  );
};

export default Loading;